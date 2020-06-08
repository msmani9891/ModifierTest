

var context = {
    "breadCrumb": [],
    "treeStruct" : [{
    "id": "1",
    "name": "Pizza",
    "level": 1,
    "children": [
      {
        "id": "1",
        "name": "Crust",
        "level": 2,
        "alertmsg": "Select atleast 1",
        "children": [
          {
            "id": "1",
            "name": "Veg",
            "level": 3,
            "alertmsg": "Select (min 1 and max 2)",
            "children": [
              {
                "id": "1",
                "name": "Olives",
                "level": 4,
                "selected": false
              },
              {
                "id": "2",
                "name": "Tomato",
                "level": 4,
                "selected": false
              },
              {
                "id": "3",
                "name": "Jalapeno",
                "level": 4,
                "selected": false
              },
              {
                "id": "4",
                "name": "Specials",
                "level": 4,
                "alertmsg": "Select any 1",
                "children": [
                  {
                    "id": "1",
                    "name": "Mushroom",
                    "level": 5,
                    "selected": false
                  },
                  {
                    "id": "2",
                    "name": "Asparagus",
                    "level": 5,
                    "selected": false
                  },
                  {
                    "id": "3",
                    "name": "Corn",
                    "level": 5,
                    "selected": false
                  },
                  {
                    "id": "4",
                    "name": "Panner",
                    "level": 5,
                    "alertmsg": "Select any 1",
                    "children": [
                      {
                        "id": "1",
                        "name": "Tikka",
                        "level": 6,
                        "selected": false
                      },
                      {
                        "id": "2",
                        "name": "South Twist",
                        "level": 6,
                        "selected": false
                      },
                      {
                        "id": "3",
                        "name": "Scrambled",
                        "level": 6,
                        "selected": false
                      },
                      {
                        "id": "4",
                        "name": "Fried",
                        "level": 6,
                        "selected": false
                      },
                     
                    ]
                  },
                ]
              },
            ]
          },
          {
            "id": "2",
            "name": "Veg 1",
            "level": 3,
            "selected": false
          },
          {
            "id": "3",
            "name": "non-veg",
            "level": 3,
            "selected": false
          }
        ]
      },
      {
        "id": "2",
        "name": "Toppings",
        "level": 2,
        "selected": false
      },
      {
        "id": "3",
        "name": "Sides",
        "level": 2,
        "selected": true
      }
    ]
  }], 
  "jumpToItem": []
  }
  
  
  
  var source   = $("#category_template").html();
  var template = Handlebars.compile(source);
  
  var bcSource   = $("#breadcrumb_template").html();
  var bcTemplate = Handlebars.compile(bcSource);

  //render the data into the template
  var html = template(context);
  var bcHtml = bcTemplate(context);
  
  //put the rendered data into DOM
  $("#content").html(html);
  $("#breadcrumb").html(bcHtml);
  //onclick function for home page species menu
  
  
  templatefun = function(i, a){
      var index = i;      
    var found_names = $.grep(context.treeStruct, function(v) {
        return [v.level === a];
    });
    
      context.breadCrumb.push(context.treeStruct[i]);
      context.jumpToItem.push(context.treeStruct[i]);
      if(context.treeStruct){
        for(i=0; i < context.treeStruct.length; i++){
          if(index === i){
            if(context.treeStruct);
               context = {   
                "breadCrumb": context.breadCrumb,
                "treeStruct": context.treeStruct[index].children ? [...context.treeStruct[index].children] : "",
                "jumpToItem": context.jumpToItem
              }
              html = template(context.treeStruct);
              bcHtml = template(context);              
               $("#content").html(html);               
               $("#breadcrumb").html(bcHtml);
          }
       }
      }
      else {
        return context;
      }       
  }

  backtoItem = function(index, level){  
    var bc_updated = context.breadCrumb.slice(0, index + 1 );    
    context = {   
      "breadCrumb": bc_updated,
      "treeStruct": context.jumpToItem[index].children,
      "jumpToItem": context.jumpToItem
    }
    html = template(context.treeStruct);
    bcHtml = template(context);              
     $("#content").html(html);               
     $("#breadcrumb").html(bcHtml);
  };


  itemSelected = function(name, level){    
    var found_names = $.grep(context.treeStruct, function(v) {
      console.log(v.level, v.name);
      // console.log(v.level === level);
        if(v.level === parseInt(level) && v.name === name){
          console.log(v.selected);
          v.selected = !v.selected;
          console.log(v.selected);
        }
    });    
  }

  
  
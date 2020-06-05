

var context = {
    "breadcrumb": [],
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
                "level": 4
              },
              {
                "id": "2",
                "name": "Tomato",
                "level": 4
              },
              {
                "id": "3",
                "name": "Jalapeno",
                "level": 4
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
                    "level": 5
                  },
                  {
                    "id": "2",
                    "name": "Asparagus",
                    "level": 5
                  },
                  {
                    "id": "3",
                    "name": "Corn",
                    "level": 5
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
                        "level": 6
                      },
                      {
                        "id": "2",
                        "name": "South Twist",
                        "level": 6
                      },
                      {
                        "id": "3",
                        "name": "Scrambled",
                        "level": 6
                      },
                      {
                        "id": "4",
                        "name": "Fried",
                        "level": 6
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
            "level": 3
          },
          {
            "id": "3",
            "name": "non-veg",
            "level": 3
          }
        ]
      },
      {
        "id": "2",
        "name": "Toppings",
        "level": 2
      },
      {
        "id": "3",
        "name": "Sides",
        "level": 2
      }
    ]
  }]
  }
  
//   var source1   = $("#breadcrumb_template").html();
//   var template1 = Handlebars.compile(source1);
  
  var source   = $("#category_template").html();
  var template = Handlebars.compile(source);
  
  //render the data into the template
  var html = template(context);
//   html = template1(context);
  
  //put the rendered data into DOM
  $("#content").html(html);
//   $("#breadcrumb").html(html);
  //onclick function for home page species menu
  
  
  templatefun = function(i, a){
      var index = i;
      for(i=0; i < context.treeStruct.length; i++){
         if(index === i){
              context = {
               //"breadcrumb": [...context.treeStruct],
               "treeStruct": [...context.treeStruct[index].children]
             }
              html = template(context);
              $("#content").html(html);
              //$("#breadcrumb").html(html);
         }
      }
    //  console.log(context.breadcrumb);
  }
  
  
  
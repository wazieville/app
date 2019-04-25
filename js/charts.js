
//  line chart

new Chart(document.getElementById("chart"),
{"type":"line",
 "data":{"labels":["January","February","March","April","May","June","July"],"datasets":[
    {"label":"My First Dataset",
      "data":[65,59,80,81,56,55,40],
      "fill":false,
      "borderColor":"rgb(75, 192, 192)",
      "lineTension":0.1}]},
      "options":{
          legend: {
             display: false,
             position: 'right',
           },
         scales:{
           xAxes: [{
              ticks: {
                fontSize: 8,
              }
            }],
         },}
  });


  new Chart(document.getElementById("chart2"),
  {"type":"line",
   "data":{"labels":["January","February","March","April","May","June","July"],"datasets":[
      {"label":"My First Dataset",
        "data":[65,59,80,81,56,55,40],
        "fill":false,
        "borderColor":"rgb(75, 192, 192)",
        "lineTension":0.1}]},
        "options":{
            legend: {
               display: false,
               position: 'right',
             },
           scales:{
             xAxes: [{
                ticks: {
                  fontSize: 8,
                }
              }],
           },}
    });

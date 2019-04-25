

  $('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
    $(".rotate").toggleClass("down");
  });

  $('.filter-manager').hide();
  $('.interaction-manager').hide();
  $('.chart-container').hide();

  $('.Interact').click(function(e){
    $('.filter-manager').hide();
    $('.chart-container').hide();
    $('.interaction-manager').show();
  });

  $('.Filter').click(function(e) {
    $('.interaction-manager').hide();
    $('.filter-manager').show();
    $('.chart-container').show();
    // new Chart(document.getElementById("chart"),
    // {"type":"line",
    //  "data":{"labels":["January","February","March","April","May","June","July"],"datasets":[
    //     {"label":"My First Dataset",
    //       "data":[65,59,80,81,56,55,40],
    //       "fill":false,
    //       "borderColor":"rgb(75, 192, 192)",
    //       "lineTension":0.1}]},
    //       "options":{
    //           legend: {
    //              display: false,
    //              position: 'right',
    //            },
    //          scales:{
    //            xAxes: [{
    //               ticks: {
    //                 fontSize: 8,
    //               }
    //             }],
    //          },}
    //   });
  });


  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
    $('#chart2').show();
  });

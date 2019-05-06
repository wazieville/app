

  $('.btn-expand-collapse').click(function(e) {
    $('.navbar-primary').toggleClass('collapsed');
    $(".rotate").toggleClass("down");
  });

  $('.filter-manager').hide();
  $('.interaction-manager').hide();
  $('.chart-container').hide();
  $('.hr-scrl').hide();

  $('.Interact').click(function(e){
    $('.filter-manager').hide();
    $('.chart-container').hide();
    $('.hr-scrl').hide();
    $('.interaction-manager').show();
  });

  $('.Filter').click(function(e) {
    $('.interaction-manager').hide();
    $('.filter-manager').show();
    $('.chart-container').show();
    $('.hr-scrl').show();
    map.setLayoutProperty('grids', 'visibility', 'visible');
    map.setLayoutProperty('grid-highlighted', 'visibility', 'none');
  });


  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
    $('#chart2').show();
  });

  var fishinfo =  function () {
      $('.filter-manager').hide();
      $('.chart-container').hide();
      $('.hr-scrl').hide();
      $('.interaction-manager').show();
  };

  var fInfo = function () {
    var id = filter[3];
    document.getElementById('fid').innerText = id;
  };


var defaultMapview = function(){
  map.setView([38.242,-85.793], 13);
};

var clearMap = function(){
  if (typeof featureGroup !== 'undefined') {
    map.removeLayer(featureGroup);
  }
};


mapboxgl.accessToken = 'pk.eyJ1IjoiZGhydXZzMDQiLCJhIjoiY2psZWkxem45MDZuNjNrcWhkZDMxdXo5byJ9.O_pXu61MgF8AfZiWLaR5pA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dhruvs04/cjtehgcvh31ym1fleyjaq7cu3',
  center: [-85.793,38.242],
  zoom: 12
});



var plot1Func = function() {
  // clearMap();
  // defaultMapview();
  //
  // colorRampCon = ["#F2F2F2", "#93BFAF","#6DA67B","#6DA6A0","#192E40"];
  //
  // colorPolygons = function(feature){
  //   if (feature.properties.prdctns <= 100) {
  //     return colorRampCon[0];
  //   } else if (feature.properties.prdctns <= 200 &&feature.properties.prdctns > 300 ) {
  //     return colorRampCon[1];
  //   } else if (feature.properties.prdctns <= 300 && feature.properties.prdctns> 400) {
  //     return colorRampCon[2];
  //   } else if (feature.properties.prdctns <= 400 && feature.properties.prdctns > 500 ) {
  //     return colorRampCon[3];
  //   }  else if (feature.properties.prdctns > 500 ) {
  //     return colorRampCon[4];
  //   }
  // };
  //
  //
  // myStyle = function(feature){
  //   var theStyle = {
  //     color: colorPolygons(feature),//colorPolygons(feature,inputs),
  //     fillOpacity: 0.5,
  //     stroke: true,
  //     strokeOpacity: 1,
  //     weight: 1
  //   };
  //   return(theStyle);
  // };
  //
  // featureGroup = L.geoJson(polyparsed, {
  //   style: myStyle,
  //
  //   onEachFeature: function(feature, layer) {
  //       layer.bindPopup(polyPopUp(feature));
  //   }
  // });
  //
  // map.addLayer(featureGroup);

};

function addr(dat) {
  var feat = dat.features[0];
  var neigh = feat.context[0].text;
  var adr = feat.place_name;

  var fHtml =  neigh + "\n" + adr;
  return fHtml;
}


var poly = "https://raw.githubusercontent.com/msdakot/Congestion-Prediction-in-Louisville-KY/master/database/fishfake20.geojson";

var polyparsed;

var colorRamp = ["#21bfd7","#2c84f0","#a626fb","#21d78f","#858aa0"];


$.ajax(poly).done(function(poly){
  // Parse JSON
  polyparsed = JSON.parse(poly);
  // Show the initial slide

  var flt_month = ['==', "month", 5];
  var flt_wDay = ['==', "weekDay", 5];
  var flt_hr = ['==', "hour", 10];

  map.on('style.load',function(){

    map.addSource('fishnets', {
      type: 'geojson',
      data: polyparsed
      });

    map.addLayer({
      "id":"grids",
      "type":"fill",
      'source': 'fishnets' ,
      'layout': {
        'visibility': 'visible'},
      'paint':{
        'fill-color':'#f3f333',
        'fill-opacity': 0.08,
        'fill-outline-color':'#fff',
      }
      });

      function filterBy(hour) {

          var flt_hr = ['==', "hour", hour];
          map.setFilter('grids', flt_hr);
      }

        // document.getElementById('mslider').addEventListener('input', function(e) {
        //   var month = parseInt(e.target.value);
        //   // update the map
        //   flt_month = ['==', "month", month];
        //   map.setFilter('grids', ['all', flt_month, flt_wDay, flt_hr]);
        //   console.log(flt_month);
        // });

        //
        //
        // document.getElementById('wslider').addEventListener('input', function(e) {
        //   var wDay = parseInt(e.target.value);
        //   // update the map
        //   flt_wDay = ['==', "weekDay", wDay];
        //   map.setFilter('grids', ['all', flt_month, flt_wDay, flt_hr]);
        //   console.log(flt_wDay);
        // });
        //
        //
        //
      document.getElementById('hslider').addEventListener('input', function(e) {
        var hour= parseInt(e.target.value);
        console.log(hour);
        filterBy(hour);
      });

      // Single Gridcell selection
      map.addLayer({
          "id": "grid-highlighted",
          "type": "fill",
          "source": "fishnets",
          'layout': {
            'visibility': 'visible'},
          "paint": {
          "fill-outline-color": "#484896",
          "fill-color": "#6e599f",
          "fill-opacity": 0.08
          },
          "filter": ["in", "fshnt_d", ""]
          });

      map.on('click', function(e) {
        // set bbox as 5px reactangle area around clicked point
        var bbox = [[e.point.x - 5, e.point.y - 5], [e.point.x + 5, e.point.y + 5]];
        var features = map.queryRenderedFeatures(bbox, { layers: ['grids'] });
        var filter = features.reduce(function(memo, feature) {
        memo.push(feature.properties.fshnt_d);
        return memo;
        }, ['in', 'fshnt_d']);

        map.setFilter("grid-highlighted", filter);
        map.setLayoutProperty('grid-highlighted', 'visibility', 'visible');
        fishinfo();
        map.setLayoutProperty('grids', 'visibility', 'none');
        var id = filter[3];
        document.getElementById('fid').innerText = id;

        var coords = e.lngLat;

        var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + coords.lng.toString()+','+coords.lat.toString()+".json?access_token="+mapboxgl.accessToken;
        $.get(url, function(data){
            var dat = data;
            console.log(addr(dat));
            var adtext = addr(dat)
            document.getElementById('neigh').innerText =adtext;
          });

        });
  });


    console.log("done!");
});

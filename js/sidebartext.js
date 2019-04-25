
var defaultMapview = function(){
  map.setView([38.242,-85.793], 13);
};

var clearMap = function(){
  if (typeof featureGroup !== 'undefined') {
    map.removeLayer(featureGroup);
  }
};


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


var poly = "https://raw.githubusercontent.com/msdakot/Congestion-Prediction-in-Louisville-KY/master/database/fishfake20.geojson";

var polyparsed;

var colorRamp = ["#21bfd7","#2c84f0","#a626fb","#21d78f","#858aa0"];


$.ajax(poly).done(function(poly){
  // Parse JSON
  polyparsed = JSON.parse(poly);
  // Show the initial slide

  var style = function (feature) {
    return {
        fillColor: colorRamp[1],
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.5
      };
    };

  var featureGroup = L.geoJson(polyparsed, {
    style: style });

  map.addLayer(featureGroup);
  }
);

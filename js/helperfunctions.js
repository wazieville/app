// function getweekinfobyID (id) {
//   var feat = fishWeek.features;
//   var f_winfo = feat.filter(function(s) {
//   return s.properties.FishnetID === id;
//   });
//
//   document.getElementById('neigh').innerText =addr(dat);
// }

function gethrinfoID(id) {
    var feat = fish.features;
    var f_hinfo = feat.filter(function (s) {
        return s.properties.FishnetID === id;
    });
    return populate(f_hinfo),console.log("hours!!!");
}


function populate(fhr) {
  var hr0= (Math.round(fhr[0].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am12').innerText =hr0;

  var hr1 = (Math.round(fhr[1].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am1').innerText =hr1;

  var hr2 =(Math.round(fhr[2].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am2').innerText =hr2;

  var hr3 =(Math.round(fhr[3].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am3').innerText =hr3;

  var hr4 =(Math.round(fhr[4].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am4').innerText =hr4;

  var hr5 =(Math.round(fhr[5].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am5').innerText =hr5;

  var hr6 = (Math.round(fhr[6].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am6').innerText =hr6;

  var hr7 = (Math.round(fhr[7].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am7').innerText =hr7;

  var hr8 = (Math.round(fhr[8].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am8').innerText =hr8;

  var hr9 = (Math.round(fhr[9].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am9').innerText =hr9;

  var hr10= (Math.round(fhr[10].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am10').innerText =hr10;

  var hr11= (Math.round(fhr[11].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('am11').innerText =hr11;

  var hr12= (Math.round(fhr[12].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm12').innerText =hr12;

  var hr13=(Math.round(fhr[13].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm1').innerText =hr13;

  var hr14 = (Math.round(fhr[14].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm2').innerText =hr14;

  var hr15= (Math.round(fhr[15].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm3').innerText =hr15;

  var hr16 = (Math.round(fhr[16].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm4').innerText =hr16;

  var hr17= (Math.round(fhr[17].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm5').innerText =hr17;

  var hr18 = (Math.round(fhr[18].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm6').innerText =hr18;

  var hr19= (Math.round(fhr[19].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm7').innerText =hr19;

  var hr20= (Math.round(fhr[20].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm8').innerText =hr20;

  var hr21=(Math.round(fhr[21].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm9').innerText =hr21;

  var hr22= (Math.round(fhr[22].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm10').innerText =hr22;

  var hr23=(Math.round(fhr[23].properties.Predicted*100)/100).toString()+" mins";
  document.getElementById('pm11').innerText =hr23;

  return console.log("ready!!");

}

// first color is not -negative values.
var colorRamp = ["#bcbcbc","#21BFD7", "#26A1E3","#2C84F0" ,"#6955F5", "#A626FB"];

function colorit(feat) {
  if (feature.properties.TotalTrip <= 1000) {
        return colorRampCon[0];
      } else if (feature.properties.TotalTrip <= 5000 &&feature.properties.TotalTrip > 1000 ) {
        return colorRampCon[1];
      } else if (feature.properties.TotalTrip <= 20000 && feature.properties.TotalTrip > 5000) {
        return colorRampCon[2];
      } else if (feature.properties.TotalTrip <= 100000 && feature.properties.TotalTrip > 20000 ) {
        return colorRampCon[3];
      }  else if (feature.properties.TotalTrip > 100000 ) {
        return colorRampCon[4];
      }
};

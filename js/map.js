var map = L.map('map');
var india = L.latLng([21.882, 82.749]);

var mapquestUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
subDomains = ['otile1','otile2','otile3','otile4'],
mapquestAttrib = "MapQuest and OpenStreetMap"

var mapquest = L.tileLayer.grayscale(mapquestUrl, {maxZoom: 18, attribution: mapquestAttrib, subdomains: subDomains});

// mapquest.addTo(map);

// Circle icon
// var cityIcon = ;

function init () {
  $("#select").select2();
  $("#select").on("change", countryChanged);

  function countryChanged (selection) {
    country = selection.val;
    // Send ajax and get GeoJSON

      }
  map.setView(india, 5);

  // m = L.marker(india, 
  //   {icon: L.divIcon({className: 'icon', html: 10, iconSize: [40, 40]})}
  //   ).addTo(map);
  // m.on({
  //   click: function (e) {
  //     console.log(e);
  //   }
  // });


}

init();
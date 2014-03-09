var map = L.map('map');
var india = L.latLng([21.882, 82.749]);

var mapquestUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
subDomains = ['otile1','otile2','otile3','otile4'],
mapquestAttrib = "MapQuest and OpenStreetMap"

var mapquest = L.tileLayer.grayscale(mapquestUrl, {maxZoom: 18, attribution: mapquestAttrib, subdomains: subDomains});
mapquest.addTo(map);

$("#select").select2();
$("#select").on("change", countryChanged);

function countryChanged (selection) {
  country = selection.val;
  // TODO: Fetch country location and set the map view.
  // Send ajax request and get GeoJSON
  getData(country);
}

function init () {

  map.setView(india, 5);
  getData('India');
}

function getData (country) {
  $.ajax({
    url: "http://www.ineveraskforit.org/testimonial-api/json",
    data: {country:country},
    success: function (data) {
      currentCountry = L.latLng([data[0].lat, data[0].lon]);
      map.setView(currentCountry, 5);
      points = data.slice(1);
      points.forEach(addToMap);
    }
  });
}

function addToMap (element, index, array) {
  // Create a marker.
  // Add it to the map.
  cityMarker = L.marker([element.lat, element.lon],
    {icon: L.divIcon({className: 'icon', html: element.count, iconSize: [40,40]})}
    ).addTo(map);

  // Bind click event.
  cityMarker.on({
    click: function (e) {
      element.incidents.forEach(fillInfoBox);
    }
  })

}

function fillInfoBox (element, index, array) {
  // Use element to fill the sidebar entries.
}

init();

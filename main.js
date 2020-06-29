window.onload = function myFunction() {
    document.getElementsByClassName('icons')[0].style.visibility = 'hidden';
};

//fetch('http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&APPID=1f74c3eb0b46e9ee763ac67588491bc0&units=metric&lang=nl', {
//    
//})
//
//     .then(res => res.json())
//
//    .then(data => document.getElementById('windkmh').innerHTML = (data['weather'][0]['wind.speed']))


fetch('http://weerlive.nl/api/json-data-10min.php?key=4c9967ff90&locatie=Amsterdam&callback=?', {
    
})
    .then(res => res.json())

    .then(data => document.getElementById('windkmh').innerHTML = (data['liveweer'][0]['windkmh']))



fetch('http://weerlive.nl/api/json-data-10min.php?key=4c9967ff90&locatie=Amsterdam&callback=?', {
    
})
    .then(res => res.json())

    .then(data => document.getElementById('windr').innerHTML = (data['liveweer'][0]['windr']))


var platform = new H.service.Platform({
  'apikey': 'vRBJhaT_Y0LX-KEs_3njwkWU75tnlpRpEROVBGbmGM8'
});

var defaultLayers = platform.createDefaultLayers();


var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 11,
      center: { lat: 52.328362, lng: 4.904633 }
        
    });

function addMarkersToMap(map) {
    var bijvenIjMarker = new H.map.Marker({lat:52.404563, lng:4.922179});
    map.addObject(bijvenIjMarker);

    var olvgMarker = new H.map.Marker({lat:52.374827, lng: 4.837848});
    map.addObject(olvgMarker);

    var pietHeinMarker = new H.map.Marker({lat:52.376819, lng:4.927620});
    map.addObject(pietHeinMarker);

    var amcMarker = new H.map.Marker({lat:52.297377, lng: 4.972733});
    map.addObject(amcMarker);

    
}

window.addEventListener('resize', () => map.getViewPort().resize());

window.onload = function () {
  addMarkersToMap(map);
}      
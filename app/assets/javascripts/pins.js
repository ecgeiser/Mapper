function initialize() {
  var mapOptions = {
    center: { lat: 38.8951100	, lng: -77.0363700
},
     zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

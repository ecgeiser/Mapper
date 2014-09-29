function initialize() {
  var mapOptions = {
    center: { lat: 38.8951100	, lng: -77.0363700 },
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

$.ajax ({
	type: "GET",
	url: "/pins",
	dataType: "json",
	success: function(data) {
		for (var i = 0; i < data.length; i++) {
			new google.maps.Marker({
  		position: new google.maps.LatLng(data[i].latitude, data[i].longitude),
  		map: map
		});
		}

	},
});

	google.maps.event.addListener(map, 'click', function(event) {
	  var location = event.latLng;

	  $.ajax({
	    type: "POST",
	    url: "/pins",
	    dataType: "json",
	    data: { 
	    	pin: {
	    		longitude: location.k, 
	    		latitude: location.A
	    	}
	     },
	    success: function(data) {
	    	console.log(data)
	      new google.maps.Marker({
	      	position: new google.maps.LatLng(data.latitude, data.longitude),
	      	map: map
	      });
	    } 
		});
	});

}

google.maps.event.addDomListener(window, 'load', initialize);




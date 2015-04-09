define('gmaps',['async!http://maps.google.com/maps/api/js?KEY=AIzaSyD1qy89_RG8dmqPWp0gn75lhRt--VAI3I8'], function() {
    // Google Maps API and all its dependencies will be loaded here.
    var map;
	function initialize() {
	  var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(-34.397, 150.644)
	  };
	  map = new google.maps.Map(document.getElementById('maps'),
	      mapOptions);
	}
	console.log('gmpas');
	google.maps.event.addDomListener(window, 'load', initialize);

	return map;
    //return window.google.maps;

});
var mapLocation = new google.maps.LatLng(-37.823534, 144.975617); //change coordinates here

var mapLocation = new google.maps.LatLng(parseFloat(jQuery('#map').data('lat')), parseFloat(jQuery('#map').data('lng')));

var marker;
var map;



if (jQuery('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}


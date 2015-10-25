// Initialize the platform object:
var platform = new H.service.Platform({
	'app_id': 'ltDBBsGHTBolY0ZL3swA',
	'app_code': 'bAyhiep8Dkcld5lfkZTfdg'
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
	document.getElementById('mapContainer'),
	maptypes.satellite.map,{
		zoom: 19, //about 2 blocks, takes ~30s actual walking time from end to end?
		center: { lng: -87.6252530, lat: 41.8261990 }
});

//https://developer.here.com/javascript-apis/documentation/v3/maps/topics/map-types.html
//maptypes contains: normal, satellite, and terrain views, each of which have many subtypes
//view reference link above for a table breakdown
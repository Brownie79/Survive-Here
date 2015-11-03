// Instantiate (and display) a map object:
var map = new H.Map(
	document.getElementById('mapContainer'),
	maptypes.satellite.map,
	{	zoom: 19, //about 2 blocks, takes ~30s actual walking time from end to end?
		center: { lng: -87.6252530, lat: 41.8261990 } }
);
console.log("basicmap.js exectuted successfully");

//https://developer.here.com/javascript-apis/documentation/v3/maps/topics/map-types.html
//maptypes contains: normal, satellite, and terrain views, each of which have many subtypes
//view reference link above for a table breakdown
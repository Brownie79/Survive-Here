var group;
var marker;

jQuery(function(){
	// group holds objects added to map
	group = new H.map.Group();
	
	//create a marker on the center of the map
	marker = new H.map.Marker(map.getCenter());
	
	// Add the marker to the group (which causes 
	// it to be displayed on the map)
	group.addObject(marker);
	
	//add group to the map created in basicmap.js
	map.addObject(group);
	
	//console.log(marker.getPosition()); //print position before moving
	//marker.setPosition( { lng: -87.4252530, lat: 41.8261990 } );
	//marker.getPosition();
	console.log("markers.js exectuted successfully");
	
});




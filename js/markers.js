jQuery(function(){
	// group holds objects added to map
	var group = new H.map.Group();
	
	//add group to the map created in basicmap.js
	map.addObject(group);
	
	//create a marker on the center of the map
	var marker = new H.map.Marker(map.getCenter());
	
	// Add the marker to the group (which causes 
	// it to be displayed on the map)
	group.addObject(marker);
	console.log("markers.js exectuted successfully");
	
	// console.log(marker.getPosition()); //for whatever reason marker doesn't show up on map, perhaps try specifying icon?
});


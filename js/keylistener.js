var stepsize = 0.00005; // determines speed of marker movement
var vechMultiplier = 1; //default 1, change when entering, exiting a vechicle

jQuery(function(){

	window.onkeydown = function(e){
	//the following is a compact if statement structure
	/*	if(e.keyCode) { key = e.keyCode; }
		else { key = e.which; } */
	var key = e.keyCode ? e.keyCode : e.which;
	
	switch (key){
		case 87: // w
		case 38: // up
			//up key
			//console.log("Up Key");
			//marker.setPosition({lng: marker.getPosition().lng , lat:marker.getPosition().lat+(stepsize*vechMultiplier)});
			map.setCenter({lng: map.getCenter().lng , lat:map.getCenter().lat+(stepsize*vechMultiplier)});
			marker.setPosition(map.getCenter());
			break;
		case 83: // s
		case 40: // down
			//down key
			//console.log("Down Key");
			//marker.setPosition({lng: marker.getPosition().lng , lat:marker.getPosition().lat-(stepsize*vechMultiplier)});
			map.setCenter({lng: map.getCenter().lng , lat:map.getCenter().lat-(stepsize*vechMultiplier)});
			marker.setPosition(map.getCenter());
			break;
		case 65: // a
		case 37: // left
			//left key
			//console.log("Left Key");
			//marker.setPosition({lng: marker.getPosition().lng-(stepsize*vechMultiplier) , lat:marker.getPosition().lat});
			map.setCenter({lng: map.getCenter().lng-(stepsize*vechMultiplier) , lat:map.getCenter().lat});
			marker.setPosition(map.getCenter());
			break;
		case 39: // right
		case 68: // d
			//console.log("Right Key");
			//right key
			//marker.setPosition({lng: marker.getPosition().lng+(stepsize*vechMultiplier) , lat:marker.getPosition().lat});
			map.setCenter({lng: map.getCenter().lng+(stepsize*vechMultiplier) , lat:map.getCenter().lat});
			marker.setPosition(map.getCenter());
			break;
		case 32: //spacebar
			// send out "pulse"
			fetchPlaces(processRequest);
		default:
			//do nothing
	} //switch
	
	};
	console.log("keylistener.js exectuted successfully");
});
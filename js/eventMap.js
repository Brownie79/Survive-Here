var mapEvents;
var behavior;

jQuery(function(){
	//Initalize the map
	//basic map does that to var map
	
	//Enable the event system on the map instance
	mapEvents = new H.mapevents.MapEvents(map);
	
	//Add event listener
	map.addEventListener(
		'tap', function(evt){
			console.log(evt.type, evt.currentPointer.type); // Log 'tap' and 'mouse' events:
		}
	);
	
	// Instantiate the default behavior, providing the mapEvents object: 
	behavior = new H.mapevents.Behavior(mapEvents); //alows for zoom in and out as well as drag around
	console.log("eventMap.js exectuted successfully");   
});

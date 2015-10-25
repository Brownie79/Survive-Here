//Initalize the map
var eventsMap = new H.Map(
	document.getElementById("mapContainer"),	
	maptypes.satellite.map,
	{	zoom:19, center: { lng: -87.6252530, lat: 41.8261990 }	}
);

//Enable the event system on the map instance
var mapEvents = new H.mapevents.MapEvents(eventsMap);

//Add event listener
eventsMap.addEventListener(
	'tap', function(evt) 
	{
		console.log(evt.type, evt.currentPointer.type); // Log 'tap' and 'mouse' events:
	}
);

// Instantiate the default behavior, providing the mapEvents object: 
var behavior = new H.mapevents.Behavior(mapEvents); //alows for zoom in and out as well as drag around

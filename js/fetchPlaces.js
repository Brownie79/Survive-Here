function fetchPlaces(CallBack){
	var url = 	"http://places.cit.api.here.com/places/v1/discover/explore"+
				"?at=" + map.getCenter().lat + "," + map.getCenter().lng +
				"&app_id=" + app_id +
				"&app_code="+ app_code + 
				"&tf=plain"+
				"&pretty=true";
    console.log(url);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                CallBack(xmlHttp.responseText); // should be the json ready to be parsed
        };
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null); //no idea wtf this does

}// http://stackoverflow.com/a/247498/4599519

function processRequest(data){ //sent as callback when calling fetchPlaces()
    alert(data);
}
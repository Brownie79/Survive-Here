/* Maps API JS Implemenation
Works like a charm, returns JSON object
*/
var json = null;

function placesSearch(){
    var placesService = platform.getPlacesService() ,
     parameters = {
         at: map.getCenter().lat + "," + map.getCenter().lng
     };
     
    placesService.here(parameters,
    function (result) {
      dealWithJSON(result);
      //alert(JSON.stringify(result, null ,'  '));
      //alert(JSON.parse(result));
    }, function (error) {
      alert(error);
    });
}

function dealWithJSON(data){
    json = data; //leave as is, json is global, data is local, this stores the last "pulse" globally
    console.log("json loaded");
    var items = json.results.items;
    console.log("There are " + items.length +" places nearby!");
    for(i=0;i<items.length;i++){
      console.log("Name: " + items[i].title)
    }
    console.log("Done!");
    /* JSON setup is as such:
    json.
      results.
        items[#].
          position        = [lat,lng]
          distance        = int in meters away from current pos
          title           = name of the place
          averageRating   = int rating
          icon            = 
          vicinity        = nearest address to this location?
          having          =
          type            = urn:nlp-types:place
          href            = 
          category.
            id            = 
            title         =
            href          =
            type          = 
      search.
        context.
          type            =
          href            =
          location. 
            position      = [lat,lng] //the orignal lat,lng
            address.
              text        = full address of the orignal search
              house       = just the house number
              street      = just the street name
              postalCode  = zipcode
              district    = district
              city        = city
              county      = Cook
              stateCode   = IL
              country     = USA
              countrycode = USA
              
              
    */
}

/* end Maps API implementation, url: https://developer.here.com/api-explorer/rest/places-search/explore-nearby-places */

/* Example result from call alert(JSON.stringify(result, null ,'  '));
{
  "results": {
    "items": [
      {
        "position": [
          41.826098,
          -87.624666
        ],
        "distance": 49,
        "title": "Renaissance Collaborative Inc",
        "averageRating": 0,
        "category": {
          "id": "business-services",
          "title": "Business & Services",
          "href": "http://places.api.here.com/places/v1/categories/places/business-services?app_id=ltDBBsGHTBolY0ZL3swA&app_code=bAyhiep8Dkcld5lfkZTfdg",
          "type": "urn:nlp-types:category",
          "system": "places"
        },
        "icon": "http://download.vcdn.nokia.com/p/d/places2/icons/categories/02.icon",
        "vicinity": "3757 S Wabash Ave<br/>Chicago, IL 60653-1508",
        "having": [],
        "type": "urn:nlp-types:place",
        "href": "http://places.api.here.com/places/v1/places/840dp3ty-d21dc84c6e3c4d93a387fc484434cdd1;context=Zmxvdy1pZD1kYmM4NWU4ZS02OTU1LTUxZDUtOTE3ZS0yYWE2ZmJkNzQ3N2RfMTQ0Njc5NTA5NDkzNl8xOTY0Xzg2NDAmcmFuaz0w?app_id=ltDBBsGHTBolY0ZL3swA&app_code=bAyhiep8Dkcld5lfkZTfdg",
        "id": "840dp3ty-d21dc84c6e3c4d93a387fc484434cdd1"
      },
      {
        "position": [
          41.826098,
          -87.624666
        ],
        "distance": 49,
        "title": "Bronzeville Green Landscaping",
        "averageRating": 0,
        "category": {
          "id": "business-services",
          "title": "Business & Services",
          "href": "http://places.api.here.com/places/v1/categories/places/business-services?app_id=ltDBBsGHTBolY0ZL3swA&app_code=bAyhiep8Dkcld5lfkZTfdg",
          "type": "urn:nlp-types:category",
          "system": "places"
        },
        "icon": "http://download.vcdn.nokia.com/p/d/places2/icons/categories/02.icon",
        "vicinity": "3757 S Wabash Ave<br/>Chicago, IL 60653-1508",
        "having": [],
        "type": "urn:nlp-types:place",
        "href": "http://places.api.here.com/places/v1/places/8403fv6k-8bfb36ceaaa30a49a57e28330b1a1159;context=Zmxvdy1pZD1kYmM4NWU4ZS02OTU1LTUxZDUtOTE3ZS0yYWE2ZmJkNzQ3N2RfMTQ0Njc5NTA5NDkzNl8xOTY0Xzg2NDAmcmFuaz0x?app_id=ltDBBsGHTBolY0ZL3swA&app_code=bAyhiep8Dkcld5lfkZTfdg",
        "id": "8403fv6k-8bfb36ceaaa30a49a57e28330b1a1159"
      },
      {
        "position": [
          41.826041,
          -87.624665
        ],
        "distance": 50,
        "title": "Genesis Housing Development",
        "averageRating": 0,
        "category": {
          "id": "religious-place",
          "title": "Religious Place",
          "href": "http://places.api.here.com/places/v1/categories/places/religious-place?app_id=ltDBBsGHTBolY0ZL3swA&app_code=bAyhiep8Dkcld5lfkZTfdg",
          "type": "urn:nlp-types:category",
          "system": "places"
        },
        "icon": "http://download.vcdn.nokia.com/p/d/places2/icons/categories/39.icon",
        "vicinity": "3763 S Wabash Ave<br/>Chicago, IL 60653-1528",
        "having": [],
        "type": "urn:nlp-types:place",
        "href": "http://places.api.here.com/places/v1/places/840dp3ty-df50aed04d8549208583db48d54903a7;context=Zmxvdy1pZD1kYmM4NWU4ZS02OTU1LTUxZDUtOTE3ZS0yYWE2ZmJkNzQ3N2RfMTQ0Njc5NTA5NDkzNl8xOTY0Xzg2NDAmcmFuaz0y?app_id=ltDBBsGHTBolY0ZL3swA&app_code=bAyhiep8Dkcld5lfkZTfdg",
        "id": "840dp3ty-df50aed04d8549208583db48d54903a7"
      },
      {
        "position": [
          41.826041,
          -87.624665
        ],
        "distance": 50,
        "title": "YMCA",
        "averageRating": 0,
        "category": {
          "id": "sports-facility-venue",
          "title": "Sport Facility/Venue",
          "href": "http://places.api.here.com/places/v1/categories/places/sports-facility-venue?app_id=ltDBBsGHTBolY0ZL3swA&app_code=bAyhiep8Dkcld5lfkZTfdg",
          "type": "urn:nlp-types:category",
          "system": "places"
        },
        "icon": "http://download.vcdn.nokia.com/p/d/places2/icons/categories/30.icon",
        "vicinity": "3763 S Wabash Ave<br/>Chicago, IL 60653-1528",
        "having": [],
        "type": "urn:nlp-types:place",
        "href": "http://places.api.here.com/places/v1/places/8403fv6k-b968e8e8c2ba07ec27aa40924a5d8566;context=Zmxvdy1pZD1kYmM4NWU4ZS02OTU1LTUxZDUtOTE3ZS0yYWE2ZmJkNzQ3N2RfMTQ0Njc5NTA5NDkzNl8xOTY0Xzg2NDAmcmFuaz0z?app_id=ltDBBsGHTBolY0ZL3swA&app_code=bAyhiep8Dkcld5lfkZTfdg",
        "id": "8403fv6k-b968e8e8c2ba07ec27aa40924a5d8566"
      }
    ]
  },
  "search": {
    "context": {
      "location": {
        "position": [
          41.826149,
          -87.625253
        ],
        "address": {
          "text": "3744 S Wabash Ave<br/>Chicago, IL 60653<br/>USA",
          "house": "3744",
          "street": "S Wabash Ave",
          "postalCode": "60653",
          "district": "Douglas",
          "city": "Chicago",
          "county": "Cook",
          "stateCode": "IL",
          "country": "USA",
          "countryCode": "USA"
        }
      },
      "type": "urn:nlp-types:place",
      "href": "http://places.api.here.com/places/v1/places/loc-dmVyc2lvbj0xO3RpdGxlPTM3NDQrUytXYWJhc2grQXZlO2xhdD00MS44MjYxNDk7bG9uPS04Ny42MjUyNTM7c3RyZWV0PVMrV2FiYXNoK0F2ZTtob3VzZT0zNzQ0O2NpdHk9Q2hpY2Fnbztwb3N0YWxDb2RlPTYwNjUzO2NvdW50cnk9VVNBO2Rpc3RyaWN0PURvdWdsYXM7c3RhdGVDb2RlPUlMO2NvdW50eT1Db29rO2NhdGVnb3J5SWQ9YnVpbGRpbmc7c291cmNlU3lzdGVtPWludGVybmFs;context=c2VhcmNoQ29udGV4dD0x?app_id=ltDBBsGHTBolY0ZL3swA&app_code=bAyhiep8Dkcld5lfkZTfdg"
    }
  }
}

*/


/* pure JS implementation that doesn't fully work */
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
/* end js implementation */


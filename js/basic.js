//AppID: ltDBBsGHTBolY0ZL3swA
//App Code: bAyhiep8Dkcld5lfkZTfdg

                    
$.ajax({
  url: 'https://image.maps.cit.api.here.com/mia/1.6/mapview',
  type: 'GET',
  data: {
    app_id: 'ltDBBsGHTBolY0ZL3swA',
    app_code: 'bAyhiep8Dkcld5lfkZTfdg'
  },
  success: function (data) {
    alert("Data Loaded 1");
    var image = document.createElement("img");
    image.src = "data:image/png;," + data;    
    alert("Data Loaded! 2");
    //alert(JSON.stringify(data));
  }
});



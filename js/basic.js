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
    alert(JSON.stringify(data));
  }
});



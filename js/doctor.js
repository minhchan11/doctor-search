var apiKey = require("./../.env").doctorApiKey;
exports.getDoctors = function (issue, makeList) {

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ issue+'&location=47.60805%20%2C-122.33349%2C%2030&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey)
    .then(function(responses) {
      setTimeout(function(){ makeList(responses.data); }, 50);

     })
    .fail(function(error){
       console.log("fail");
     });
    };

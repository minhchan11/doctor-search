var getDoctors = require('./../js/doctor.js').getDoctors;

var makeList = function(result){
  var allDoctors = [];
  result.forEach(function(item){
    allDoctors.push(item);
  });
  console.log(allDoctors[0]);
  if(allDoctors.length > 0){
    for (var i = 0; i < allDoctors.length; i++) {
      $("#doctors").append("<div class = 'col-md-3 well'>" +"<img class='img-circle' src="+ allDoctors[i].profile.image_url +">" + "<h5>"+ allDoctors[i].profile.first_name + " "+ allDoctors[i].profile.last_name +"</h5>" + "<h6>"+ allDoctors[i].profile.title +"</h6>"+"<button class = 'btn btn-success' data-toggle='collapse' data-target='#bio" + i + "'>Information</button>"+ "<div id='bio" + i + "' class='collapse'>" + allDoctors[i].profile.bio + "</div>" + "</div>");
    };
  } else {
    $("#doctors").append("<h5> There is no doctor matched your search </h5>");
  };

};
$(document).ready(function(){
  $("form").submit(function(event) {
    $("#doctors").text("");
    event.preventDefault();
    var issue = $("input#sick").val();
    getDoctors(issue, makeList);
  });
});

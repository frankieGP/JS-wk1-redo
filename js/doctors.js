var apiKey = require('./../.env').apiKey;

// for (var i =0; i < data.length; i +1) {
//   alert(data[i].profile.first_name);
// }

function Doctor () {
}
Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)     .then(function(result){
      $('#doctor-list').text(result.data.forEach(function(data) {
        $('#doctor-list').append('<p>' + data.profile.first_name + " " + data.profile.last_name + '</p>');
      console.log(result);
    }));


      }).fail(function(error){
        $('#doctor-list').text("No matches found. Please try again.");
       });
   }






exports.doctorModule = Doctor;

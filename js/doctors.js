var apiKey = require('./../.env').apiKey;


function Doctor () {

}

Doctor.prototype.getDoctor = function(doctorList) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
    //  $('#doctor-list').text("<The humidity in " + doctorList + " is " + response.main.humidity + "%");
      console.log(result);
    })
   .fail(function(error){
    //  $('#doctor-list').text(error.responseJSON.message);
      console.log("fail");
    });
  };
  console.log("Hi! I'm a weather object.");
}

exports.doctorModule = Doctor;

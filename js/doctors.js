var apiKey = require('./../.env').apiKey;

// for (var i = 0; i < doctorlist.length; i +1) {
//   createElement('h1', doctorlist);
// }


// function Doctor () {
// }
//what parameter in the method?
Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey);
//   console.log("Hi!");
//   console.log(result);
// };
});
});



    // .then(function(result)){
    // })


  //  .then(function(result) {
  //    //PRINTS DATA
  //    //how to find
  //    $('#doctor-list').text("<p>The the following doctors can help you</p> " + result.main.name);
  //     console.log(result);
  //   })
  //   //FAIL MESSAGE
  //  .fail(function(error){
  //    $('#doctor-list').text(error.responseJSON.message);
  //     console.log("fail");
  //   });




exports.doctorModule = Doctor;

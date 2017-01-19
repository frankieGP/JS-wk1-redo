var apiKey = require('./../.env').apiKey;

// for (var i =0; i < data.length; i +1) {
//   alert(data[i].profile.first_name);
// }

function Doctor () {
}
Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)     .then(function(result){
    for (var i = 0; i < result.data.length; i ++ 1) {
      $('#doctor-list').text(result.data[i].profile.first_name + " " + result.data[i].profile.last_name);
    }
      console.log(result);

    //  console.log(result.object[0]data.first_name);
    //  console.log(result.data[0].profile.first_name + result.data[0].profile.last_name);
      });

}








  //   //FAIL MESSAGE





exports.doctorModule = Doctor;

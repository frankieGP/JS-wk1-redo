var Doctor = require('./../js/doctors.js').doctorModule;




$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#doctor-list').hide();

  $('#submit-button').click(function(event) {
    event.preventDefault();
    var medicalIssue = $('#aliment').val();
    $('#doctor-list').empty();


    currentDoctorObject.getDoctors(medicalIssue);
    $('#doctor-list').show();

  });
});

var Doctor = require('./../js/doctors.js').doctorModule;




$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#submit-button').click(function() {
    event.preventDefault();
    var medicalIssue = $('#aliment').val();
    currentDoctorObject.getDoctors(medicalIssue);

  });
});

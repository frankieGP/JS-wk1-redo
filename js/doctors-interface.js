var Doctor = require('./../js/doctors.js').doctorModule;




$(document).ready(function() {
  $('#submit-button').click(function(event) {
    event.preventDefault();
    var medicalIssue = $('#aliment').val();
    var currentDoctorObject = new Doctor();
    results.forEach(function(data) {
      $(".doctor-list").append(data)
    };
  currentDoctorObject.getDoctors(medicalIssue);

  });
});

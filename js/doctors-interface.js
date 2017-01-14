var Doctor = require('./../js/doctors.js').doctorModule;




$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#submit-button').click(function() {
    var sickness = $('#aliment').val();
    $('#aliment').val("");
    currentDoctorObject.getDoctor(sickness);

  });
});

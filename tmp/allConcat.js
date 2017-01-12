var Doctor = require('./../js/doctors.js').doctorModule;

$(document).ready(function() {
  $('#sickness-form').submit(function(event) {
    event.preventDefault();
    var aliment = $('#aliment').val();
    alert(aliment);
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#thanks').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

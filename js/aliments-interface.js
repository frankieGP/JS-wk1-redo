$(document).ready(function() {
  $('#sickness-form').submit(function(event) {
    event.preventDefault();
    var aliment = $('#aliment').val();
    alert(aliment);
  });
});

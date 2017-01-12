$(document).ready(function() {
  $('#sickness-form').submit(function(event) {
    event.preventDefault();
    var aliment = $('#aliment').val();
    alert(aliment);
    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
  });
});

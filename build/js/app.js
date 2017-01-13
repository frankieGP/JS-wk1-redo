(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1bc1ec65881d0f1c0d0f1790b157ef2e";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.doctorModule = Doctor;
var Doctor = 1;



exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctors.js":2}]},{},[3]);

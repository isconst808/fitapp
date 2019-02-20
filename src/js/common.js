const $ = require("jquery");
const Rellax = require('rellax');

$(document).ready(function () {
    var rellax = new Rellax('.rellax');




});

$('.icon-wrap').on('click', function (e) {
    e.preventDefault();
    $('.icon-wrap').removeClass('active');
    $(this).addClass('active');
})
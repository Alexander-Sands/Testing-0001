"use strict";

/* global $, alert, console */
$(function () {
  'use strict'; // Adjust Login Form Height

  var myLoginForm = $('.Login-Form');
  myLoginForm.height($(window).height());
  $(window).resize(function () {
    // Adjust Login Form Height
    myLoginForm.height($(window).height()); // Center From

    myLogin.css({
      marginTop: (myLoginForm.height() - myLogin.height()) / 2
    });
  }); // Center From

  var myLogin = $('.Login-Form .Login');
  myLogin.css({
    marginTop: (myLoginForm.height() - myLogin.height()) / 2
  }); // Chack Login

  var myButton = $('.Login-Form .Login input[type="submit"]'),
      myEmail = $('.Login-Form .Login input[type="text"]'),
      myPassword = $('.Login-Form .Login input[type="password"]');
  myButton.click(function (e) {
    e.preventDefault();

    if (myEmail.val() == "Alexander Sands" && myPassword.val() == "123-53-52") {
      window.location.href = 'HTML/Home.html';
    } else {
      $($(this).data('popup')).fadeIn(500);
    }
  }); // Popup

  $('.popup').click(function (e) {
    $(this).fadeOut(500);
  });
  $('.popup .inner').click(function (e) {
    e.stopPropagation();
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27 || e.keyCode == 9 || e.key == 'Enter') {
      $('.popup').fadeOut(500);
    }
  });
});
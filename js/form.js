// Validates contact form before sending
$(document).ready(function() {
  $('#sendbtn').click(function (event) {
    event.preventDefault(); // prevents form from submitting.
    var email = $('#email').val();
    var message = $('#message').val();

    if (email.length >= 5 && email.includes('@') && email.includes('.')) {
      $('.invalid.email').css('display', 'none');
    }
    else {
      console.log("invalid email");
      event.preventDefault(); // prevents form from submitting.
      $('.email').html("Invalid e-mail.");
      $('.invalid.email').css('display', 'inline');
    }

    if (message.length > 0) {
      $('.invalid.message').css('display', 'none');
    }
    else {
      console.log("invalid msg");
      event.preventDefault(); // prevents form from submitting.
      $('.message').html("Please enter a message.");
      $('.invalid.message').css('display', 'inline');
    }
  })
})

// Changes the background color of the nav using inView.js plugin
inView.threshold(0.90);
var $nav = $('.nav');
inView('.section').on('enter', function() {
  $nav.css('background-color', 'black');
})

inView('#intro').on('enter', function() {
  console.log("entered");
  $nav.css('background-color', '');
})

inView('#footer').on('enter', function() {
  $nav.css('background-color', '');
})

inView('#footer').on('exit', function() {
  $nav.css('background-color', 'black');
})

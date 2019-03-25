// Changes the background color of the nav using inView.js plugin
inView.threshold(0.90);
var $nav = $('.nav');
inView('.section').on('enter', function() {
  $nav.css('background-color', 'rgba(0, 0, 0, 0.9)');
})

inView('#intro').on('enter', function() {
  console.log("entered");
  $nav.css('background-color', '');
})

inView('#footer').on('enter', function() {
  $nav.css('background-color', '');
})

inView('#about').on('enter', function() {

})

inView('#skills').on('enter', function() {

})

inView('#projects').on('enter', function() {

})

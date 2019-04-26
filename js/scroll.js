// Changes the background color of the nav using inView.js plugin
inView.threshold(0.90);
var $nav = $('.nav');
inView('#footer').on('enter', function() {
  $nav.css('opacity', 0);
})
inView('#footer').on('exit', function() {
  $nav.css('opacity', 1);
})
inView('#about').on('enter', function() {

})

inView('#skills').on('enter', function() {

})

inView('#projects').on('enter', function() {

})

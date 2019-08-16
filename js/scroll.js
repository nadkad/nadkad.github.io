// Changes the background color of the nav using inView.js plugin
inView.threshold(0.99);
var $nav = $('.nav');
var $nava = $('.nav a');

// Nav bar becomes black after scrolling down home page
inView('#home').on('enter', function() {
  $nav.css('background-color', 'transparent');
  $('#about-link').removeClass('active');
}).on('exit', function() {
  $nav.css('background-color', 'black');
});

// Nav bar fades away at the footer / contact page
inView('#footer').on('enter', function() {
  $nav.css('opacity', 0);
}).on('exit', function() {
  $nav.css('opacity', 1);
  $nav.css('background-color', 'black');
  $('#contact-link').closest('nav ul').find('a.active').removeClass('active');
  $('#contact-link').addClass('active');
});

// Ensure that navbar is black when these pages are opened
inView.threshold(0.80);
inView('#about').on('enter', function() {
  $nav.css('background-color', 'black');
  $('#about-link').closest('nav ul').find('a.active').removeClass('active');
  $('#about-link').addClass('active');
});

inView('#skills').on('enter', function() {
  $nav.css('background-color', 'black');
  $('#skills-link').closest('nav ul').find('a.active').removeClass('active');
  $('#skills-link').addClass('active');
});

inView('#projects').on('enter', function() {
  $nav.css('background-color', 'black');
  $('#projects-link').closest('nav ul').find('a.active').removeClass('active');
  $('#projects-link').addClass('active');
});

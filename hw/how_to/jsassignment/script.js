// Variable to track the number of steps
var totalsteps = 5;

//Track which step should be displayed
var currentstep = 0;
// store the html of each slide
var currentslide ;

$(function(){
$('.totalsteps').html(totalsteps);

//hide the steps
$('.steps li, .end, .controls, #prev').hide();

});

//click events

$('#begin').on('click' , function(){
  //do something here
$('.welcome').hide();
currentstep = 1;
currentslide = $('#step' + currentstep);
$(currentslide).fadeIn(1000);
$('.controls').fadeIn(1000);
$('h2').html('Step' + currentstep);
});

//click on Next
$('#next').on('click' , function(){
  if(currentstep != totalsteps){
  $(currentslide).hide();
  currentstep++;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step' + currentstep);
}
if(currentstep == totalsteps){
  $('#next').hide();
}
if(currentstep != 1) {
  $('#prev').show();
}
});

//click on prev
$('#prev').on('click' , function(){

  $(currentslide).hide();
  currentstep--;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step' + currentstep);

if(currentstep != totalsteps){
  $('#next').show();
}
if(currentstep == 1) {
  $('#prev').hide();
}
});

$('#finish').on('click', function(){
  //hide everything again
  $('.steps li, .controls, #prev').hide();
  $('.end').fadeIn(1000);
  $('h1').toggle(7000);
  $('h1').html('Time to play!')
});

$('.stepimg').on('click', function (){
  $(this).css('width', '100%');
});

$('h1').on('mouseover', function (){
  $(this).css('color', 'blue');
});

$('h1').on('mouseleave', function (){
  $(this).css('color', 'red');
});

$('.stepimg').on('click', function (){
  location.reload();
});

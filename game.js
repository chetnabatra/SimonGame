
var buttoncolors = ["red", "blue" , "green", "yellow"]; // array

var gamepattren =[];
var userclickedpattren = [];

var start = false;
var level = 0;

$(document).keypress(function(){


  if(!start) {

    $("#level-title").text("level" + " "+ level);
    nextseq();
    start=true;
  }
});

$(".btn").click(function(){

var userchosencolor = $(this).attr("id");
userclickedpattren.push(userchosencolor);
playSound(userchosencolor);


 animatePress(userchosencolor);

 checkans(userclickedpattren.length-1);
});


function nextseq(){
 userclickedpattren = [];
level++;
  $("#level-title").text("level" + " "+ level);
var randomno = Math.floor(Math.random() * 4);

var randomcolorchoose = buttoncolors[randomno];

gamepattren.push(randomcolorchoose);


$("#" + randomcolorchoose).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomcolorchoose);

}
function animatePress(currentcolor){

  $("#" + currentcolor).addClass("pressed");


setTimeout(function(){

$("#" + currentcolor).removeClass("pressed");
},100);

}
function playSound (Name){

  var audio = new Audio("sounds/" + Name + ".mp3");
  audio.play();

}
function checkans(currentlevel){

  if(gamepattren[currentlevel]===userclickedpattren[currentlevel]){


  if(userclickedpattren.length===gamepattren.length){

    setTimeout(function(){
      nextseq();

},1000);
}}
else {


  playSound("wrong");
  $("body").addClass("game-over");

  setTimeout(function(){
      $("body").removeClass("game-over");

    },200);
$("#level-title").text("GAME OVER, PRESS ANY KEY TO RESTART");
startover();
}
}

function startover() {
 start = false;
 level = 0;
 var gamepattren =[];
}

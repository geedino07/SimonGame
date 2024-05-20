// alert("Enter here");

var bottonColours = ["green", "red", "yellow", "blue"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var keyTriggered = false;


function checkAnswers(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over", setTimeout(function(){
            $("body").removeClass("game-over")}, 200))
            playSound("wrong");
            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
        }
    }


$(".btn").click(function(){
    // var userChosenColour = event.target.id;
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswers(userClickedPattern.length - 1);
})

function nextSequence(){
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColours = bottonColours[randomNumber];
    gamePattern.push(randomChosenColours);


    $("#" + randomChosenColours).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColours)
    console.log(randomChosenColours);
}


function startOver(){
    level = 0;
    gamePattern = [];
    // userClickedPattern = [];
    keyTriggered = false;
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(color){
    $("#" + color).addClass("pressed", setTimeout(function(){
    $("#" + color).removeClass("pressed")}, 100));
}

$(document).keydown(function(e){
if (!keyTriggered){
    $("#level-title").text("Level " + level);
    nextSequence();
    keyTriggered = true;
}

//     if (keyTriggered) return
//     $("h1").text("Level " + level);
//     nextSequence();
//    console.log(e.key);

});





// $("#" + randomChosenColours).addClass("pressed", setTimeout(function(){
//     $("#" + randomChosenColours).removeClass("pressed")}, 200));

// makeSound(randomChosenColours)

// var boxes = document.querySelectorAll(".btn").length;
// for (var i = 0; i < boxes; i++){
//     document.querySelectorAll(".btn")[i].addEventListener("click", function(event) {
//         var userChosenColour = event.target.id;
//         var color = this.getAttribute("id");
//         userClickedPattern.push(color);
//         playSound(color);
//         console.log(userChosenColour + " and " + color);
//         console.log(userClickedPattern);

//     })
// }


var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ['red', 'blue', 'green', 'yellow'];

var started = false;

var level = 0;


// STARTING THE GAME - KEYBOARD DETECTION

$(document).keydown(function(){
    if(!started){
        nextSequence();
        $('#level-title').text('Nivel ' + level)
        var started = true;
    }
});


// GENERATE SEQUENCE

function nextSequence(){
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    level++;
    $('#level-title').text('Nivel ' + level);
};


// USER CHOICE - CLICK DETECTION

$('.btn').click(function(){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

// CHECKING USER'S ANSWER

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log('success');

        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence()
            }, 1000);
        }

    } else {
        console.log('wrong');

        var wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();

        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over')
        }, 200);

        $('#level-title').text('GAME OVER pulsa cualquier tecla para volver a empezar');
        startOver();
    };

};

// RESTARTING WHEN WRONG

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

// ANIMATIONS

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animatePress(currentColour){
    $('#' + currentColour).addClass('pressed');
    setTimeout(function(){
        $('#' + currentColour).removeClass('pressed')}, 100
    );
}


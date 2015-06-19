$(document).ready(function(){

    var secretNumber = 0;
    var userGuess = 0;
    var guessCount = 0;
    var finish = false;

    var setSecret= function() {
        secretNumber = (Math.floor(Math.random()*100));
        console.log(secretNumber);
    };

    setSecret();

    var ifPositiveAmount = function() {
        switch(true) {
        	case ((userGuess - secretNumber) === 0):
        		setFeedback("You win!");
            	finish = true;
            	break;
            case ((userGuess - secretNumber) > 50):
            	setFeedback("You're ice cold!");
            	break;
            case ((userGuess - secretNumber) > 30):
            	setFeedback("You're cold!");
            	break;
            case ((userGuess - secretNumber) > 20):
            	setFeedback("You're warm!");
            	break;
            case ((userGuess - secretNumber) > 10):
            	setFeedback("You're hot!");
            	break;
            case ((userGuess - secretNumber) > 0):
            	setFeedback("You're blazing hot!");
            	break;
        }
    };

    var ifNegativeAmount = function() {
        switch(true) {
        	case (userGuess / secretNumber === 1):
        		setFeedback("You win");
            	finish = true;
            	break;
            case ((userGuess - secretNumber) > 50):
            	setFeedback("You're ice cold!");
            	break;
            case ((userGuess - secretNumber) > 30):
            	setFeedback("You're cold!");
            	break;
            case ((userGuess - secretNumber) > 20):
            	setFeedback("You're warm!");
            	break;
            case ((userGuess - secretNumber) > 10):
            	setFeedback("You're hot!");
            	break;
            case ((userGuess - secretNumber) > 0):
            	setFeedback("You're blazing hot!");
            	break;
        }
    };

    var comparisonAmount = function(){
        if (userGuess - secretNumber > 0) {
            ifNegativeAmount();
        } else {
            ifPositiveAmount();
        }
    }

    var setFeedback = function(feedback) {
        $('#feedback').text(feedback);
    }

    var setCount = function(count){
        $('#count').text(guessCount);
    }

    var newGame = function(){
        guessCount = 0;
        finish = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        secretNumber = (Math.floor(Math.random()*100));
        setFeedback("Make your guess!");
    };

    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });

    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

    $('.new').click(function(){
        newGame();
    });

var checkInput = function() {
    if (userGuess.isNaN) {
        alert("Invalid input.");
    } else if (userGuess === " ") {
        alert("Please Input a number!");
    } else if (userGuess < 0 || userGuess > 100) {
        alert("Number must be from 1 to 100!");
    } else {
        comparisonAmount();
        $('#userGuess').val('');
        guessCount++;
        setCount(guessCount);
        $('ul#guessList').append("<li>" + userGuess + "</li>");
    }
};

    $("form").submit(function(event){
        event.preventDefault();
        if(!finish){
            userGuess = $('#userGuess').val();
            checkInput();
        } else {
            setFeedback("You already won! Need to start a new game!");
        }
    });
});
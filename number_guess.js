"use strict";

//Global variables
var randomNumber = 0;

window.onload = randomNumberGen();

/* $(document).ready(() => {
    //Validation
    let isValid = true;

    //Validate Player One Input
    $("#playerOneInput").submit(event => {
        const namePlayerTwo = $("#namePlayerOne").val().trim;
        if (namePlayerOne == "") {
            $("#namePlayerOne").next().text("Name is required");
            isValid = false;
        } else {
            $("#namePlayerOne").next().text("");
        }

        //Guesses must be a number between 1 and 100
        if (isNaN(guessPlayerOne) || x < 1 || x > 100) {
            $("#guessPlayerOne").next().text("Guess must be a integer between 1 and 100");
            isValid = false;
        }

        //Guesses must be different
        if ($('#guessPlayerOne').val() == $('#guessPlayerOne').val()) {
            $("#guessPlayerOne").next().text("Guess must be different from the other player's");
            isValid = false;
        }
    })

        //Validate Player Two Input
        $("#playerTwoInput").submit(event => {
            const namePlayerTwo = $("#namePlayerTwo").val().trim;
            if (namePlayerTwo == "") {
                $("#namePlayerTwo").next().text("Name is required");
                isValid = false;
            } else {
                $("#namePlayerTwo").next().text("");
            }

            //Guesses must be a number between 1 and 100
            if (isNaN(guessPlayerTwo) || x < 1 || x > 100) {
                $("#guessPlayerTwo").next().text("Guess must be a integer between 1 and 100");
                isValid = false;
            }

            //Guesses must be different
            if ($('#guessPlayerTwo').val() == $('#guessPlayerOne').val()) {
                $("#guessPlayerTwo").next().text("Guess must be different from the other player's");
                isValid = false;
            }
        })

        if (isValid == false) {
            event.preventDefault;
        }

        nameFunctionAndGuess();
    }); */

//Alternate validation
function validateNamesAndGuesses() {

    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    const player1 = document.getElementById('namePlayerOne');
    const player2 = document.getElementById('namePlayerTwo');
    const player1Guess = document.getElementById('guessPlayerOne');
    const player2Guess = document.getElementById('guessPlayerTwo');

    //Name is required for player 1
    if (!player1.value) {
        alert("Name is required for Player 1");
        return false;
    }

    //Name is required for player 2
    if (!player2.value) {
        alert("Name is required for Player 2");
        return false;
    }

    //Guess is required for player 1
    if (!player1Guess.value ) {
        alert("A guess is required for Player 1")
        return false;
    }
    
    //Guess is required for player 2
    if (!player2Guess.value) {
        alert("A guess is required for Player 2")
        return false;
    }
 
    //Player 1 name must contain only letters
    if (!player1.value.match(letters)) {
        alert("Player 1: Your name can only contain letters");
        return false;
    }

    //Player 2 name must contain only letters
    if (!player2.value.match(letters)) {
        alert("Player 2: Your name can only contain letters");
        return false;
    }

    //Guesses for player 1 must be a number between 1 and 100
    if (isNaN(player1Guess.value) || player1Guess.value < 1 || player1Guess.value > 100) {
        alert("Player 1: Your guess must be a integer between 1 and 100");
        return false;
    }

    //Guesses for player 2 must be a number between 1 and 100
    if (isNaN(player2Guess.value) || player2Guess.value < 1 || player2Guess.value > 100) {
        alert("Player 2: Your guess must be a integer between 1 and 100");
        return false;
    }

    //Player 1 guess must contain only numbers 
    if (!player1Guess.value.match(numbers)) {
        alert("Player 1: Your guess must be an integer");
        return false;
    }

    //Player 2 guess must contain only numbers
    if (!player2Guess.value.match(numbers)) {
    alert("Player 2: Your guess must be an integer");
    return false;
    }

    nameFunctionAndGuess();
}

//Get random number
function randomNumberGen() {
    randomNumber = Math.floor(Math.random() * 101);
}

//Compare guesses to random number
function comparePlayerGuesses() {
    let playerOneResult = document.getElementById('playerOneRecordGuess').innerHTML;
    console.log({ playerOneResult });
    let playerTwoResult = document.getElementById('playerTwoRecordGuess').innerHTML;
    console.log({ playerTwoResult });

    //Player One results qualifications 
    if (playerOneResult == randomNumber) {
        let oneWinner = "Winner!";
        document.getElementById('resultOne').innerHTML = oneWinner;
        let TwoLoser = "Better luck next time";
        document.getElementById('resultTwo').innerHTML = TwoLoser;
        var resultsOneWinner = document.getElementById('namePlayerOne').value;
        console.log({ resultsOneWinner });

    } else {
        if (playerOneResult < randomNumber) {
            let tooLowOne = "That's too low.";
            document.getElementById('resultOne').innerHTML = tooLowOne;
        } else {
            let tooHighOne = "That's too high.";
            document.getElementById('resultOne').innerHTML = tooHighOne;
        }
    }

    //Player Two Results Qualifications
    if (playerTwoResult == randomNumber) {
        let twoWinner = "Winner!";
        let OneLoser = "Better luck next time.";
        document.getElementById('resultTwo').innerHTML = twoWinner;
        document.getElementById('resultOne').innerHTML = OneLoser;
        var resultsTwoWinner = document.getElementById("namePlayerTwo").value;
        console.log({ resultsTwoWinner });

    } else {
        if (playerTwoResult < randomNumber) {
            let tooLowTwo = "That's too low.";
            document.getElementById('resultTwo').innerHTML = tooLowTwo;
        } else {
            let tooHighTwo = "That's too high.";
            document.getElementById('resultTwo').innerHTML = tooHighTwo;
        }
    }
}

//Submit button
function nameFunctionAndGuess() {

    document.getElementById("resultNamePlayerOne").innerHTML = document.getElementById("namePlayerOne").value;
    document.getElementById("resultNamePlayerTwo").innerHTML = document.getElementById("namePlayerTwo").value;
    document.getElementById("playerOneRecordGuess").innerHTML = document.getElementById("guessPlayerOne").value;
    document.getElementById("playerTwoRecordGuess").innerHTML = document.getElementById("guessPlayerTwo").value;

    comparePlayerGuesses();
}

//Reset Button
function myResetButton() {
    document.getElementById('namePlayerOne').value = '';
    document.getElementById('namePlayerTwo').value = '';
    document.getElementById('guessPlayerOne').value = '';
    document.getElementById('guessPlayerTwo').value = '';

    randomNumberGen();
}

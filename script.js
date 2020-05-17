let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
	targetNum = Math.floor(Math.random() * 10);
	return targetNum;
}

//function to check for valid user input
function checkInput(humanGuess) {
	if ((humanGuess > 9) || (humanGuess < 0)) {
		alert('Please enter a number between 0 and 9.')
	}
}

//helper function for compareGuesses, working now that I have the right number of parens in call in compareGuesses
function getAbsoluteDistance(target, guess) {
	return (Math.abs(target - guess));
} 

function compareGuesses(humanGuess, computerGuess, targetNum) {

	checkInput(humanGuess) //checks input and gives an alert if input is outside of range, but game continues otherwise
	// comparison of absolute values of difference between guesses and target 
	if ((getAbsoluteDistance(targetNum, humanGuess)) < (getAbsoluteDistance(targetNum, computerGuess))) {
		return true; 
	} else if (humanGuess === computerGuess) {
		return true; 
	} else {
		return false; 
	}
}

function updateScore(winner) {
	if (winner === 'human') {
		humanScore += 1; 
	}
	if (winner === 'computer') {
		computerScore += 1; 
	}
}

function advanceRound() {
	currentRoundNumber += 1; 
}
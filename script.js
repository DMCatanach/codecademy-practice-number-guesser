let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
	targetNum = Math.floor(Math.random() * 10);
	return targetNum;
}

function compareGuesses(humanGuess, computerGuess, targetNum) {
	if (humanGuess === computerGuess) {
		return true; 
	}
	// comparison of absolute values of difference between guesses and target 
	if (Math.abs(targetNum - humanGuess) < Math.abs(targetNum - computerGuess)) {
		return true; 
	} else {
		return false; 
	}
}
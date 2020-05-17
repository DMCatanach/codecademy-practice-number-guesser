let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
	targetNum = Math.floor(Math.random() * 10);
	return targetNum;
}
//not confident this is working; testing isn't displaying a win message
function compareGuesses(humanGuess, computerGuess, targetNum) {

	// comparison of absolute values of difference between guesses and target 
	if ((Math.abs(targetNum - humanGuess)) < (Math.abs(targetNum - computerGuess))) {
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
// The user chooses ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error!: valid choises are \'rock\',\'paper\',\'scissors\'.');
    } 
    if (userInput === 'bomb') {
      return userInput;
    }
  };
  
// The computer makes a choice.
const getComputerChoice =  () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  };
  
/*
  Determine a winner.
  If a user types 'bomb' as their choice, a user wins, no matter what.
*/
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } 
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'bomb') {
      return 'You won!';
    }
  };
  
// Start the game and log the results.
const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
// Play the game.
playGame();
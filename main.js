const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 
     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
       return userInput;
     } else {
       console.log('Error!');
     }
   };
   
   function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
       case 0:
         return 'rock';
       case 1:
         return 'paper';
       case 2:
         return 'scissors';
       }
   };
   
   function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } // closing if tie clause!!!
      
    else if (userChoice === 'rock' || 'paper' || 'scissors') {
      if (computerChoice === 'paper') {
         return 'You won!';
      } else {
         return 'Computer Won!';
      } 
     }
    }
    
    const playGame = () => {
        let userChoice = getUserChoice('scissors');
        const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
        console.log('The computer threw: ' + computerChoice);
              console.log(determineWinner(userChoice,computerChoice));
    }
    playGame();


    /* let score = JSON.parse(localStorage.getItem('score'));
      if ( score === null ) {
        score = {
          wins: 0,
          ties: 0,
          loses: 0,
        }
      } 
      */
    
      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        ties: 0,
        loses: 0,
    };
    displayScore();

    function playGame(playerMove) {
      const computerMove = pickComputerMove();

          let result = '';

      if (playerMove === 'Scissors') {
          if (computerMove === 'Rock') {
            result = 'You lose';
          } else if (computerMove === 'Paper') {
            result = 'You win';
          } else if (computerMove === 'Scissors') {
            result = 'You tie';
          }
        } else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
            result = 'You win';
          } else if (computerMove === 'Paper') {
            result = 'You tie';
          } else if (computerMove === 'Scissors') {
            result = 'You lose';
          }
        } else if (playerMove === 'Rock') {
          if (computerMove === 'Rock') {
           result = 'You tie';
          } else if (computerMove === 'Paper') {
            result = 'You lose';
          } else if (computerMove === 'Scissors') {
            result = 'You win';
          }
        }
        if (result === 'You win') {
          score.wins += 1;
        } else if ( result === 'You tie') {
          score.ties += 1;
        } else if ( result === 'You lose') {
          score.loses += 1;
        }
        localStorage.setItem('score', JSON.stringify(score));
        displayScore();

      document.querySelector('.js-result')
      .innerHTML = `You <img src="icons/${playerMove}-emoji.png" class="js-icons"> 
        <img src="icons/${computerMove}-emoji.png" class="js-icons"> Computer`;

      document.querySelector('.js-move').innerHTML = `${result}`;

      /* 
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Loses: ${score.loses}`; */
    }

    function displayScore() {
      document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Loses: ${score.loses}`;
    }

  
    function pickComputerMove() {

    const randomNumber = Math.random();

    let computerMove = '';

    if ( randomNumber >= 0 && randomNumber < 1 /2 ) {
    computerMove = 'Rock';
    } else if ( randomNumber >= 2/4 && randomNumber < 3/4 ) {
      computerMove = 'Paper';
    } else if ( randomNumber >= 3/4 && randomNumber < 1) {
      computerMove = 'Scissors';
    }
    return computerMove;
  }

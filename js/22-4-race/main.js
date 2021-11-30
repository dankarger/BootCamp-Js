let player1 = document.querySelectorAll('.active')[0];
let player2 = document.querySelectorAll('.active')[1];
let finishPlayer1 = document.querySelectorAll('.finish')[0];
let finishPlayer2 = document.querySelectorAll('.finish')[1];
let isGameOver = false;

document.addEventListener('keydown', (event) => {
    if (!isGameOver) {
        if (event.key === 'd') {
            let nextMove = player1.nextElementSibling
            player1.classList.remove('active');
            nextMove.classList.add('active');
            player1 = nextMove;
        }
        if (event.key === 'l') {
            let nextMove = player2.nextElementSibling;
            player2.classList.remove('active');
            nextMove.classList.add('active');
            player2 = nextMove;
        }
        if (finishPlayer1 === player1) {
            return win('Player1');
        }
        if (finishPlayer2 === player2) {
            return win('Player2');
        }
    }
})

function win(winner) {
    let winnerDiv = document.querySelector('.winner-div');
    let winMessage = document.createElement('h1');
    winMessage.classList.add('winning-animation');
    isGameOver = true;
    winnerDiv.appendChild(winMessage);
    winner === 'Player1' ? winMessage.style.color = 'red' : winMessage.style.color = 'yellow';
    winnerDiv.style.display = 'block';
    document.body.style.background = 'rgba(19,12,12,0.4)';
    winMessage.innerHTML = `${winner} is the Winner`;

}


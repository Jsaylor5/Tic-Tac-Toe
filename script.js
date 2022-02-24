gamePower = true;

//base game player
const gamePlayer = (() => {
    const playerOne = player('Player 1');
    const playerTwo = player('Player 2');
    let winner = false
    let count = 0;
    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        ]; 
    function player(playerName) {
        const getName = () => playerName;
        const playerSymbol = () => {
            if (playerName === 'Player 1') {
                symbol = 'X';
            } else {
                symbol = 'O';
            }
            return symbol;
        };
        return {getName, playerSymbol};
    }
    function checkWinner() {
        winningConditions.forEach((element, index) => {
            if (gameBoard[element[0]]===whichPlayer && gameBoard[element[1]]===whichPlayer && gameBoard[element[2]]===whichPlayer && winner === false) {
                const gameWinner = document.querySelector('#gameWinner')
                gameWinner.innerHTML = (whoWins + ' is the winner')
                winner = true;
                gamePower = false;
                turn.innerHTML = '';
                createNewGame();
            }
        }) 
    };
    function isTie() {
        if (count === 9 && winner === false){
            turn.innerHTML = '';
            gameWinner.innerHTML = 'Game Tie';
            createNewGame();
        }
    };
    function whosTurn(_newImg) {
        const turn = document.querySelector('#turn')
        if (count %2 === 0){
            img = _newImg.src="images/TTTX.png";
            whichPlayer = playerOne.playerSymbol();
            whoWins = playerOne.getName();
            turn.innerHTML = 'TURN: Player 2';
        } else{
            img = _newImg.src="images/TTTO.png";
            whichPlayer = playerTwo.playerSymbol();
            whoWins = playerTwo.getName();
            turn.innerHTML = 'TURN: Player 1';
        }
        count++ 
        return img;
    }
    function createNewGame(){
        let resetDiv = document.querySelector('#reset');
        let resetButton = document.createElement('button')
        resetButton.innerHTML = 'New Game';
        resetButton.type = 'submit';
        resetButton.id = 'resetButton'
        resetDiv.appendChild(resetButton);
        resetButton.addEventListener('click', () => {
            location.reload();
        })
    }

    return {
        winner,
        playerOne,
        playerTwo,
        winningConditions,
        checkWinner,
        whosTurn,
        isTie
    }
})();

//gameboard
const gameBoard = (() => {
    let board = [];
    return board;

});

const displayController = (() => {
    const individualSquares = document.querySelectorAll('.box')
    for (const newBox of individualSquares){
        let renderer = function(){
            if (gamePower === true) {
                let dataAlert = newBox.dataset.indexNumber
                let _newImg = document.createElement('img')
                gamePlayer.whosTurn(_newImg);
                newBox.appendChild(_newImg);
                gameBoard[dataAlert] = whichPlayer;
                gamePlayer.checkWinner();
                gamePlayer.isTie();
            }
        }
            newBox.addEventListener('click', renderer, {once:true})

    };
})();

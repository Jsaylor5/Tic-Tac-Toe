//base game player
const gamePlayer = (() => {
    const playerOne = player('Player1');
    const playerTwo = player('Player2');
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
                if (playerName === 'Player1') {
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
                if (gameBoard[element[0]]===whichPlayer && gameBoard[element[1]]===whichPlayer && gameBoard[element[2]]===whichPlayer) {
                    console.log('winner');
                    winner = true;
                    console.log(winner)
                }
            }) 
        };
        function isTie() {
            if (count === 9 && winner === false){
                console.log('tie')
            }
        };
        function whosTurn(_newImg) {
            if (count %2 === 0){
                img = _newImg.src="images/TTTX.png";
                whichPlayer = gamePlayer.playerOne.playerSymbol();
            } else{
                img = _newImg.src="images/TTTO.png";
                whichPlayer = gamePlayer.playerTwo.playerSymbol();
            }
            count++ 
            console.log(count)
            return img;
        }

    return {
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
    const board = [];
    return board;

});

const displayController = (() => {
    const individualSquares = document.querySelectorAll('.box')
    for (const newBox of individualSquares){
        newBox.addEventListener('click', () => {
        let dataAlert = newBox.dataset.indexNumber
        let _newImg = document.createElement('img')
            gamePlayer.whosTurn(_newImg);
            newBox.appendChild(_newImg);
            gameBoard[dataAlert] = whichPlayer;
            gamePlayer.checkWinner();
            gamePlayer.isTie();
        }, {once:true})
    };
})();




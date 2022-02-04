//gameboard
const gameBoard = (() => {
    const board = ['','','','','','','','',''];
    return board;

});

// //display controller
const displayController = (() => {
        const individualSquares = document.querySelectorAll('.box')
        for (const newBox of individualSquares){
            newBox.addEventListener('click', () => {
                let dataAlert = newBox.dataset.indexNumber
                console.log(dataAlert)
                let _newImg = document.createElement('img')
                    _whosTurn(_newImg);
                    newBox.appendChild(_newImg);
                    console.log(whichPlayer);
                    gameBoard[dataAlert] = whichPlayer;
            }, {once:true})
        };
    let count = 0
    function _whosTurn(newImg) {
        if (count %2 === 0){
            img = newImg.src="images/TTTX.png";
            whichPlayer = playerOne.playerSymbol();
        } else{
            img = newImg.src="images/TTTO.png";
            whichPlayer = playerTwo.playerSymbol();
        }
        count++
        return img;  
    }
})();

//players
const player = (playerName) => {
    const getName = () => playerName;
    const playerSymbol = () => {
        if (playerName === 'Player1') {
            symbol = 'X'
        }else {
            symbol = 'O'
        }
        return symbol;
    }
    return {getName, playerSymbol}
};
const playerOne = player('Player1')
const playerTwo = player('Player2')


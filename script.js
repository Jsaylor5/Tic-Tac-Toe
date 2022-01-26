//gameboard
const gameBoard = (() => {
    const board = ['','','','','','','','','']
    return board

});

//display controller
const displayController = (() => {
    console.log('hello');
    mouseClicker();
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

function mouseClicker() {
    const individualSquares = document.querySelectorAll('.box')
    for (const newBox of individualSquares){
        newBox.addEventListener('click', () => {
            let newImg = document.createElement('img')
                whosTurn(newImg);
                newBox.appendChild(newImg);
                console.log('it does');
        }, {once:true})
    };
};

let count = 0
function whosTurn(newImg) {
    if (count %2 === 0){
        img = newImg.src="images/TTTX.png";
        console.log(count)
    } else{
        img = newImg.src="images/TTTO.png";
    }
    count++
    return img;  
}

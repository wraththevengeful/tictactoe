function gameBoard() {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    function checkForAWin() {
        // Check rows
        for (let row = 0; row < 3; row++) {
            if (board[row][0] === board[row][1] && board[row][1] === board[row][2] && board[row][0] !== 0) {
                return board[row][0];
            }
        }

        // Check columns
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[0][col] !== 0) {
                return board[0][col];
            }
        }

        // Check diagonals
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) {
            return board[0][0];
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0) {
            return board[0][2];
        }

        // Check for empty spots (continue game)
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (board[row][col] === 0) {
                    return "continue";
                }
            }
        }

        return "Tie!";
    }

    return {
        getBoard() { return board; },
        playRoundAsX(index) { board[index[0]][index[1]] = "X"; },
        playRoundAsO(index) { board[index[0]][index[1]] = "O"; },
        checkWin() { return checkForAWin(); },
        resetBoard() {
            board = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];
        }
    };
}

// UI Code
const allTiles = document.getElementsByClassName('singleTile');
const roundAnnouncement = document.getElementById('announceText');
const startOverButton = document.getElementById('resetBoard');

// UI Functions
let mainGame = gameBoard();
let ORound = true;
updateAnnouncement("O begins the game!");

function updateAnnouncement(text) {
    roundAnnouncement.innerHTML = text;
}

function haltBoard() {
    for (let i = 0; i < allTiles.length; i++) {
        allTiles[i].style.pointerEvents = "none"; // Disable clicks
    }
}

function changeOnTouch() {
    let index = this.dataset.index.split(",").map(Number);

    if (ORound) {
        mainGame.playRoundAsO(index);
        this.innerHTML = "O";
        this.style.pointerEvents = "none";

        let gameState = mainGame.checkWin();
        if (gameState !== "continue") {
            haltBoard();
            updateAnnouncement(`${gameState} wins. Press "Start over" for a new game!`);
        } else {
            ORound = false;
            updateAnnouncement("X plays now!");
        }
    } else {
        mainGame.playRoundAsX(index);
        this.innerHTML = "X";
        this.style.pointerEvents = "none";

        let gameState = mainGame.checkWin();
        if (gameState !== "continue") {
            haltBoard();
            updateAnnouncement(`${gameState} wins. Press "Start over" for a new game!`);
        } else {
            ORound = true;
            updateAnnouncement("O plays now!");
        }
    }
}

startOverButton.addEventListener('click', () => {
    mainGame.resetBoard();
    ORound = true;
    updateAnnouncement("O begins the game!");

    for (let i = 0; i < allTiles.length; i++) {
        allTiles[i].innerHTML = "";
        allTiles[i].style.pointerEvents = "auto";
        allTiles[i].addEventListener('click', changeOnTouch);
    }
});

for (let i = 0; i < allTiles.length; i++) {
    allTiles[i].addEventListener('click', changeOnTouch);
}
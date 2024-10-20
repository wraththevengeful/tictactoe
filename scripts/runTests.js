const { gameBoard,playGame } = require('../scripts/index');

console.log(gameBoard);

// Test cases for Tic-Tac-Toe game outcomes
function runTests() {
    // Create a new game board instance
    let game = gameBoard();

    // Test case 1: X wins with a horizontal line
    console.log("Test Case 1: X Wins (Horizontal)");
    game.playRoundAsX([0, 0]);
    game.playRoundAsX([1, 0]);
    game.playRoundAsX([0, 1]);
    game.playRoundAsX([1, 1]);
    game.playRoundAsX([0, 2]); // X wins here
    console.log(game.getBoard());
    console.log(game.checkWin()); // Should print "X"

    // Reset the board
    game.resetBoard();

    // Test case 2: O wins with a vertical line
    console.log("Test Case 2: O Wins (Vertical)");
    game.playRoundAsO([0, 0]);
    game.playRoundAsX([1, 1]);
    game.playRoundAsO([0, 1]);
    game.playRoundAsX([2, 2]);
    game.playRoundAsO([0, 2]); // O wins here
    console.log(game.getBoard());
    console.log(game.checkWin()); // Should print "O"

    // Reset the board
    game.resetBoard();

    // Test case 3: X wins with a diagonal line
    console.log("Test Case 3: X Wins (Diagonal)");
    game.playRoundAsX([0, 0]);
    game.playRoundAsO([0, 1]);
    game.playRoundAsX([1, 1]);
    game.playRoundAsO([0, 2]);
    game.playRoundAsX([2, 2]); // X wins here
    console.log(game.getBoard());
    console.log(game.checkWin()); // Should print "X"

    // Reset the board
    game.resetBoard();

    // Test case 4: Tie game
    console.log("Test Case 4: Tie Game");
    game.playRoundAsX([0, 0]);
    game.playRoundAsX([0, 1]);
    game.playRoundAsO([0, 2]);
    game.playRoundAsO([1, 0]);
    game.playRoundAsO([1, 1]);
    game.playRoundAsX([1, 2]);
    game.playRoundAsX([2, 0]);
    game.playRoundAsO([2, 1]);
    game.playRoundAsX([2, 2]); // Board is now full, expect tie
    console.log(game.getBoard());
    console.log(game.checkWin()); // Should print "Tie!"

    // Reset the board
    game.resetBoard();

    // Test case 5: Multiple moves, no winner
    console.log("Test Case 5: No Winner Yet");
    game.playRoundAsX([0, 0]);
    game.playRoundAsO([0, 1]);
    game.playRoundAsX([1, 1]);
    game.playRoundAsO([1, 0]);
    console.log(game.getBoard());
    console.log(game.checkWin()); // Should print "continue"
}

// Run the tests
runTests();

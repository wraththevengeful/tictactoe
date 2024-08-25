// function gameBoard(){
    
//     return Array.from({length:3},()=>Array(3).fill(0));
    
// }

// let board = gameBoard(3,3);
// board[0][0] = "X";

// function playRound(playerSign, arrayIndex){

// }

function gameBoard() {
   let board = [
    [1, 2, 8],
    [1, 3, 7],
    [1, 4, 6]
    ];
    
    function checkForAWin(){
        let flag = false;
        let winner = "";
        // same row checks
        for(let row = 1;row>3;row++){
            for(let col = 1; col>3;col++){
                if(board[row-1][col-1]==board[row][col]){
                    flag = true;
                }
                else{
                    flag = false;
                }
            }
            if(flag == true){
                winner = board[row][col];
                console.log(winner);
            }
        }
        //same column 
    }

    return{
      getBoard(){return board},
      playRoundAsX(index){board[index[0]][index[1]]="X"},
      playRoundAsO(index){board[index[0]][index[1]]="O"},
      checkWin(){checkForAWin()},
      resetBoard(){board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
        ];}
    } 
}

let y = gameBoard();
console.log(y.checkWin());

// same row: 0,0| 0,1| 0,2
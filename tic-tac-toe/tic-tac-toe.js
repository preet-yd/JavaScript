const ticTacToe = (xName,oName) =>{
    const player = {
        X: "xName",
        O: "oName",
    }

    const board = ["ongoing","","","","","","","","",""];

    let currPlayer = "X";

    const nextPlayer = {
        X : "O",
        O : "X",
    }

    const computeStatus = () => {
        let result = "ongoing";
        
        const winningCombos = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],

            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],

            [1, 5, 9],
            [3, 5, 7],
        ];
        // if x or o wins
        winningCombos.forEach(([i1,i2,i3]) => {
            if(board[i1] === board[i2] && board[i2] === board[i3] && board[i3] === currPlayer){
                result = `${currPlayer} has won`;
                return result;
            }
            
        })
        // for draw
        let checkForMove = false;
        for(let i = 1 ; i<=9 ; i++){
            if(board[i] !== ""){
                checkForMove = true;
            }
        }
        if(check){
            result = "game is drawn";
            return result;
        }
        return result;
    }

    const isValidMove = (move) => {
        return (1<=move && move<=9) && board[move] === "";
    }

    return (player,move) => {
        // correct  player
        if(player !== currPlayer){
            return [flase,`Not your turn. It's ${currPlayer}'s move`];
        }
        // correct move
        if(!isValidMove){
            return[flase, "Invalid Move"];
        }
        board[move] = currPlayer;
        board[0] = computeStatus;
        currPlayer = nextPlayer[currPlayer];

        return [true];

    }
}
module.exports = {ticTacToe}
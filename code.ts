export function main(): void { 
  const PLAYER_X: string = 'X';
  const PLAYER_O: string = 'O';
  const EMPRY_SQUARE: string = ' ';
	let player:string = PLAYER_X;
	let ticTacToe = new TicTacToeClass();
	while (!(ticTacToe.isWinner(PLAYER_X) || ticTacToe.isWinner(PLAYER_O) || ticTacToe.isFull())) {
		ticTacToe.displayBoard();
		console.log(player + ', choose your location (row, column): ');
	  let row: number;
		row = readInt();
    let column: number:
		column = readInt();
		while (ticTacToe.isValid(row, column) == false || ticTacToe.playerAt(row, column) != EMPTY_SQUARE) {
			if (!ticTacToe.isValid(row, column))
				console.logln('That is not a valid location. Try again.');
			else if (ticTacToe.playerAt(row, column) != EMPTY_SQUARE)
				console.log('That location is already full. Try again.');
			console.log('Choose your location (row, column): ');
			row = readInt();
			column = readInt();
		}
		ticTacToe.playMove(player, row, column);
		if (player == PLAYER_X)
			player = PLAYER_O;
		else
			player = PLAYER_X;
	}
	ticTacToe.displayBoard();
	if (ticTacToe.isWinner(PLAYER_X))
		console.logln('X is the winner!');
	if (ticTacToe.isWinner(PLAYER_O))
		console.logln('O is the winner!');
	if (ticTacToe.isCat())
		console.logln('The game is a tie.');
}

main();

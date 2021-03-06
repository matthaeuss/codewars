// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// Examples:
//
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) =>
    p1 === p2
        ? 'Draw!'
        : `Player ${
            /rockscissors|scissorspaper|paperrock/.test(`${p1}${p2}`) ? 1 : 2
        } won!`

rps('scissors','paper');
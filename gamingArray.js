/*
Andy wants to play a game with his little brother, Bob. The game starts with an array of distinct integers and the rules are as follows:

    Bob always plays first.
    In a single move, a player chooses the maximum element in the array. He removes it and all elements to its right. For example, if the starting array 

, then it becomes after removing

    .
    The two players alternate turns.
    The last player who can make a move wins.

Andy and Bob play

games. Given the initial array for each game, find and print the name of the winner on a new line. If Andy wins, print ANDY; if Bob wins, print BOB.

To continue the example above, in the next move Andy will remove
. Bob will then remove

and win because there are no more integers to remove.

Function Description

Complete the gamingArray function in the editor below.

gamingArray has the following parameter(s):

    int arr[n]: an array of integers

Returns
- string: either ANDY or BOB 

*/

function gamingArray(arr) {
    let max = arr[0];
    let currentPlayer = 'BOB';

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            currentPlayer = currentPlayer === 'BOB' ? 'ANDY' : 'BOB';
        }
    }

    return currentPlayer;
}
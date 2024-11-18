/**
 * Set 3
 *
 * This assignment will develop your ability to manipulate data.
 * You should be ready for JS tutorials on more advanced topics after this.
 *
 * Please refer to the `module4/sample-data/set3-sample-data.js` file for examples of:
 * - the `socialGraph` parameter for `relationshipStatus`
 * - the `board` parameter for `ticTacToe`
 * - the `routeMap` parameter for `eta`
 */

/**
 * Relationship status
 *
 * Let's pretend that you are building a new app with social media functionality.
 * Users can have relationships with other users.
 *
 * The two guidelines for describing relationships are:
 * 1. Any user can follow any other user.
 * 2. If two users follow each other, they are considered friends.
 *
 * This function describes the relationship that two users have with each other.
 *
 * Please see the sample data for examples of `socialGraph`.
 *
 * @param {string} fromMember The subject member
 * @param {string} toMember The object member
 * @param {object} socialGraph The relationship data
 * @returns {string} "follower" if fromMember follows toMember;
 * "followed by" if fromMember is followed by toMember;
 * "friends" if fromMember and toMember follow each other;
 * "no relationship" otherwise.
 */

//define relationship from -> to
//define relationship to -> from
//if then statements for return syntax
function relationshipStatus(fromMember, toMember, socialGraph) 
{
let fromto = socialGraph[fromMember]?.following || [];
let tofrom = socialGraph[toMember]?.following || [];

if (tofrom.includes(fromMember) && fromto.includes(toMember))
{
    return "friends";
}

if (fromto.includes(toMember))
{
    return "follower";
}
if (tofrom.includes(fromMember))
{
    return "followed by";
}
return "no relationship";
}
/**
 * Tic tac toe
 *
 * Tic Tac Toe is a common paper-and-pencil game.
 * Players must attempt to draw a line of their symbol across a grid.
 * The player that does this first is considered the winner.
 *
 * This function evaluates a Tic Tac Toe game board and returns the winner.
 *
 * Please see the sample data for examples of `board`.
 *
 * @param {Array} board The representation of the Tic Tac Toe board as a square array of arrays. The size of the array will range between 3x3 to 6x6.
 * The board will never have more than 1 winner.
 * There will only ever be 2 unique symbols at the same time.
 * @returns {string} the symbol of the winner, or "NO WINNER" if there is no winner.
 */

//get board length to provide basis for loops
//loops will verify symbols in array
//win conditions:
    //check column
    //check row
    //check diagonal
        //left to right
        //right to left
//if no win conditions are made, then return "NO WINNER"
let board1 = [
    ['X','X','O'],
    ['O','X','O'],
    ['O','','X'],
    ]
    
    let board2 = [
    ['X','X','O'],
    ['O','X','O'],
    ['','O','X'],
    ]
    
    let board3 = [
    ['O','X','O'],
    ['','O','X'],
    ['X','X','O'],
    ]
    
    let board4 = [
    ['X','X','X'],
    ['O','X','O'],
    ['O','','O'],
    ]
    
    let board5 = [
    ['X','X','O'],
    ['O','X','O'],
    ['X','','O'],
    ]
    
    let board6 = [
    ['X','X','O'],
    ['O','X','O'],
    ['X','',''],
    ]
    
    let board7 = [
    ['X','X','O',''],
    ['O','X','O','O'],
    ['X','','','O'],
    ['O','X','','']
    ]

function ticTacToe(board) {
        const size = board.length;
        for (let row = 0; row < size; row++) {
            let count = 0;
            let symbol = board[row][0];
                
        if (symbol) 
            {
            for (let col = 0; col < size; col++) 
                {
                if (board[row][col] === symbol) 
                {
                count++;
                }
                }
                if (count === size) 
                {
                return symbol;
                }
                }
            }
            
        
        for (let col = 0; col < size; col++) {
            let count = 0;
            let symbol = board[0][col];
                
            if (symbol) 
            {
            for (let row = 0; row < size; row++) 
            {
            if (board[row][col] === symbol) 
            {
            count++;
            }
            }
            if (count === size) 
            {
            return symbol;
            }
            }
            }
            
            let diagCount = 0;
            let diagSymbol = board[0][0];
            
            if (diagSymbol) 
            {
            for (let i = 0; i < size; i++) 
            {
            if (board[i][i] === diagSymbol) 
            {
            diagCount++;
            }
            }
            if (diagCount === size) 
            {
            return diagSymbol;
            }
            }
            
        let antiDiagCount = 0;
        let antiDiagSymbol = board[0][size - 1];
            
        if (antiDiagSymbol) 
        {
        for (let i = 0; i < size; i++) 
        {
        if (board[i][size - 1 - i] === antiDiagSymbol) 
        {
        antiDiagCount++;
        }
        }
        if (antiDiagCount === size) 
        {
        return antiDiagSymbol;
        }
        }
        return "NO WINNER";
        }
/**
 * ETA
 *
 * A shuttle van service is tasked to travel one way along a predefined circular route.
 * The route is divided into several legs between stops.
 * The route is fully connected to itself.
 *
 * This function returns how long it will take the shuttle to arrive at a stop after leaving another stop.
 *
 * Please see the sample data for examples of `routeMap`.
 *
 * @param {string} firstStop the stop that the shuttle will leave
 * @param {string} secondStop the stop that the shuttle will arrive at
 * @param {object} routeMap the data describing the routes
 * @returns {Number} the time that it will take the shuttle to travel from firstStop to secondStop
 */


function eta(firstStop, secondStop, routeMap) {

function getDirectTime(from, to) 
{
const key = `${from},${to}`;
return routeMap[key]?.travel_time_mins;
}


function getAllStops() 
{
const stops = new Set();
for (const key of Object.keys(routeMap)) 
{
    const [from, to] = key.split(',');
    stops.add(from);
    stops.add(to);
}
    
return Array.from(stops);
}


if (firstStop === secondStop) return 0;

const allStops = getAllStops();
let minTime = Infinity;
const directions = [1, -1];

for (const direction of directions) 
{
let currentTime = 0;
let currentStop = firstStop;
let visited = new Set([firstStop]);
let found = false;

while (visited.size <= allStops.length) 
{
for (const key of Object.keys(routeMap)) 
    {
    const [from, to] = key.split(',');
    if (from === currentStop) 
        {
        const time = getDirectTime(from, to);
        if (time !== undefined) 
            {
            currentTime += time;
             if (to === secondStop) 
                {
                minTime = Math.min(minTime, currentTime);
                found = true;
                break;
                }
            if (!visited.has(to)) 
            {
                visited.add(to);
                currentStop = to;
                break;
            }
            }
        }
    }
if (found) break;
}
}

return minTime === Infinity ? null : minTime;
}
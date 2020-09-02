// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}
console.log(processFirstItem(['foo', 'bar'], (str) => str + str));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  counter1 uses a closure to hold onto the value in count when the returned function 
 *  is called to increment the count value by 1. Successive calls will increment count.
 *  counter2 increments the variable count by accessing the value from the global scope
 *  when the counter2 function is called. Both functions result in an incremented count. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  counter1 uses a closure because a function is defined inside another function. The inner function has access to the outer function scope of counterMaker and its count variable.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  counter1 keeps the count variable available but privately enclosed. This is better to avoid potential variable conflicts. counter1 code also stores this outer variable with the new function and can be called later. The counterMaker in counter1 can also be reused to make multiple counters which each keep track of their own counter variable. This is not possible with counter2.
 * Counter2 requires using a variable in the global scope, which is not generally a good idea. It also runs immediately when called.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

// const newCounter = counterMaker();
// console.log(newCounter);
// console.log(newCounter());
// console.log(newCounter());

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// console.log(counter2());
// console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3);
}
// console.log(inning());
// console.log(inning());
// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numInnings){
  const finalScore = {
    "Home": 0,
    "Away": 0
  }
  for (let i = 0; i < numInnings; i++){
    finalScore.Home += callback();
    finalScore.Away += callback();
  }
  return finalScore;
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(num, gameScore, inning){
  let numStr;
  if (num === 1){
    numStr = `${num}st inning`;
  }else {
    numStr = `${num}th inning`;
  }
  // Call inning callback function to get inning score for each team 
  let homeInnScore = inning();
  let awayInnScore = inning();

  // Update score object values
  gameScore.Home += homeInnScore;
  gameScore.Away += awayInnScore;

  // Return an array with inning results string and gameScore object
  return [` ${numStr}: ${awayInnScore} - ${homeInnScore}`, gameScore];
}

function scoreboard(getInningScore, inning, numInnings) {
  let gameScore = {
    Home: 0,
    Away: 0
  } 
  
  // For each inning call getInningScore callback to get an array containing an inning score result string and an updated gameScore object
  let inningResult = [];

  for (let i = 1; i <= numInnings; i ++){
    inningResult = getInningScore(i, gameScore, inning);
    console.log(inningResult[0]);
  }
  return(`Final Score: ${inningResult[1].Away} - ${inningResult[1].Home}`);
}

console.log("Baseball Scoreboard");
console.log("Inning   Away - Home");
console.log(scoreboard(getInningScore, inning, 9));
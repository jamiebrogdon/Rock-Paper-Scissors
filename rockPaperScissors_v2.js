// This version is a much shorter & concise way to build the game, taking into account the bots choices also.

// Create a function that returns rock, paper, or scissors as randomly as possible:

//SOLUTION: (Using functions, conditionals, loops, arrays)

// created a function with an empty parameter, that will take in the randomized number between 0-1
// created a variable for the randomized number, using the .random math method
// since there are 3 options (rock, paper, scissors) we will need to split the possibilities into thirds
// if / else if statement that is either above .33 or above .66 to determine two of the three possibilities
// created a else statement at the end to take in any other number as the final option
// called the function at the end with a empty argument to allow for math.random to do its thing!

function rockPaperScissors(){
    let random = Math.random()
    if( random < .33){
        return 'rock'
    }else if( random < .66 ){
        return 'scissors'
    }else{
        return 'paper'
    }
};

rockPaperScissors();

//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//calling the 'rock paper scissors' function first to determine the bot's choice within the 'check winner' function
//created conditional statement to check for each possibility between the bot & player choices
//writing out each possible 'win' option for the player in the if statement
//giving it a tie option in the else if
//as the function runs and goes through the if /else if statement, if none of those are true, it will read 'You Lose!'

function checkWinner(playerChoice){
    let botChoice = rockPaperScissors();
    if ( (playerChoice === 'rock' && botChoice === 'scissors') || 
    (playerChoice === 'paper' && botChoice === 'rock') ||
    (playerChoice === 'scissors' && botChoice === 'paper')){
        console.log('You Win');
    }else if(playerChoice === botChoice ){
        console.log('You Tie!');
    }else{
        console.log('You Lose!');
    }
};

checkWinner('rock');

//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr){
    arr.forEach ( choice => checkWinner(choice) )
}

playGameXTimes( ['rock', 'paper', 'scissors'] )

//created a function to set how many times the game will play
//setting the parameter to an array
//Using the .forEach method, which will call each element in the array in order (by index number)
// when calling the function, creating / taking in an array which is placed into the parameter 'arr' and ran through the function




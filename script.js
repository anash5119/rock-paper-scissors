let playerWins = 0;
let compWins = 0;


function getComputerChoice(){
    const arrChoice = ["Rock", "Paper", "Scissors"];
    return arrChoice[Math.floor(((Math.random())*3))]; //pick an array indice between 0 and 2
}

function play(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    
    if (playerChoice == "rock" && computerSelection == "Scissors"
        || playerChoice == "paper" && computerSelection == "Rock"
        || playerChoice == "scissors" && computerSelection == "Paper"){
        
        playerWins++; //add to the player wins counter
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerChoice == "rock" && computerSelection == "Paper"
            || playerChoice == "paper" && computerSelection == "Scissors"
            || playerChoice == "scissors" && computerSelection == "Rock"){
            
        compWins++; //add to the computer wins counter
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else {
        return "You tie!";
    }
}

function game(){
    //5 round match
    for(let index = 0; index < 5; index++){
        let player = prompt("Rock, Paper, or Scissors?", "Rock");
        let computer = getComputerChoice();
        console.log(play(player, computer))
    }
    
    //decide who won the match
    if(playerWins > compWins){
        console.log("You win the 5 round match!");
    }
    else if(compWins > playerWins){
        console.log("You lose the 5 round match!");
    }
    else{
        console.log("A tie!");
    }
}

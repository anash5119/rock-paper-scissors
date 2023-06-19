let playerWins = 0;
let compWins = 0;


function getComputerChoice(){
    const arrChoice = ["Rock", "Paper", "Scissors"];
    return arrChoice[Math.floor(((Math.random())*3))];
}

function play(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    
    if (playerChoice == "rock" && computerSelection == "Scissors"
        || playerChoice == "paper" && computerSelection == "Rock"
        || playerChoice == "scissors" && computerSelection == "Paper"){
        
        playerWins++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerChoice == "rock" && computerSelection == "Paper"
            || playerChoice == "paper" && computerSelection == "Scissors"
            || playerChoice == "scissors" && computerSelection == "Rock"){
            
        compWins++;        
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else {
        return "You tie!";
    }

}

function game(){
    for(let index = 0; index < 5; index++){
        let player = prompt("Rock, Paper, or Scissors?", "Rock");
        let computer = getComputerChoice();
        console.log(play(player, computer))
    }
    
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

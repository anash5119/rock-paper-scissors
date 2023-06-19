function getComputerChoice(){
    const arrChoice = ["Rock", "Paper", "Scissors"];
    return arrChoice[Math.floor(((Math.random())*3))];
}

function play(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == "rock" && computerSelection == "Scissors"
        || playerChoice == "paper" && computerSelection == "Rock"
        || playerChoice == "scissors" && computerSelection == "Paper"){
        
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerChoice == "rock" && computerSelection == "Paper"
            || playerChoice == "paper" && computerSelection == "Scissors"
            || playerChoice == "scissors" && computerSelection == "Rock"){
            
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
        console.log(play(player, computer));
    }
}

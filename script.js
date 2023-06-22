let playerWins = 0;
let compWins = 0;

const buttons = document.querySelectorAll('.playOption');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        game(button.id);
    });
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener("click", () => {
    const playerSpan = document.querySelector(".playerSpan")
    playerSpan.textContent = 0;
    const compSpan = document.querySelector(".compSpan")
    compSpan.textContent = 0;
    playerWins = 0;
    compWins = 0;
    document.getElementById("winOverlay").style.display="none";
    document.getElementById("loseOverlay").style.display="none";
});


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
        const playerSpan = document.querySelector(".playerSpan")
        playerSpan.textContent = playerWins;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerChoice == "rock" && computerSelection == "Paper"
            || playerChoice == "paper" && computerSelection == "Scissors"
            || playerChoice == "scissors" && computerSelection == "Rock"){
            
        compWins++; //add to the computer wins counter
        const compSpan = document.querySelector(".compSpan")
        compSpan.textContent = compWins;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else {
        return "You tie!";
    }
}

function game(player){
    let computer = getComputerChoice();
    console.log(play(player, computer))
    
    //decide who won the match
    if(playerWins === 5 || compWins === 5){
        if(playerWins > compWins){
            console.log("You win the 5 round match!");
            winAnimation();
        }
        else if(compWins > playerWins){
            console.log("You lose the 5 round match!");
            loseAnimation();
        }
    }
}

function winAnimation(){
    document.getElementById("winOverlay").style.display="flex";
}

function loseAnimation(){
    document.getElementById("loseOverlay").style.display="flex";
}
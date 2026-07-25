function playGame() {
const choices = [ "rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {

    let humanChoice = prompt("Enter rock, paper, or scissors").toLowerCase()
    return humanChoice

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, it's a draw.`)
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you lose.`)
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you win.`)
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you win.`)
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}, you lose.`)
        computerScore++
    }
    console.log(`Your Score:${humanScore} Computer Score:${computerScore}`)
}

    for(let i = 5; i > 0; i--) {

    playRound(getHumanChoice(), getComputerChoice())

    }
    (humanScore > computerScore) ? console.log(`You won with a score of ${humanScore} against ${computerScore}`) : console.log(`You lost with a score of ${humanScore} against ${computerScore}`)
    
}

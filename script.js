

const container = document.querySelector(".container")
const startBtn = document.createElement("button")
startBtn.textContent = "Start Game"
startBtn.addEventListener( "click", playGame)
container.appendChild(startBtn)

function playGame() {

const choices = [ "rock", "paper", "scissors"]

let humanScore = 0
let computerScore = 0

container.innerHTML = ""
const scores = document.createElement("h1")
scores.textContent = `Your Score:${humanScore} Computer Score: ${computerScore}`
const roundWinMessage = document.createElement("h1")

    let humanChoice = ""
    let computerChoice = ""

    const rockBtn = document.createElement("button")
    rockBtn.textContent = "Rock"
    rockBtn.addEventListener("click", () => {
        console.log("clicked")
        setHumanChoice()
        console.log(humanChoice)
        getComputerChoice()
        console.log(computerChoice)
        findWinner()
     })

    const scissorsBtn = document.createElement("button")
    scissorsBtn.textContent = "Scissors"
    scissorsBtn.addEventListener("click", () => {
        setHumanChoice()
        getComputerChoice()
        findWinner()
    })

    const paperBtn = document.createElement("button")
    paperBtn.textContent = "Paper"
    paperBtn.addEventListener("click", () => {
        setHumanChoice()
        getComputerChoice()
        findWinner()
     })

    container.append(rockBtn, scissorsBtn, paperBtn, scores)

function findWinner() {

    if (humanChoice === computerChoice) {
        roundWinMessage.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}, it's a draw.`
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors") ) {
        roundWinMessage.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}, you lose.`
        computerScore++
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
        roundWinMessage.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}, you win.`
        humanScore++
    }

    if (humanScore === 5) {
        container.innerHTML = ""
        let winMessage = document.createElement("h1")
        winMessage.textContent = "Congrats, you won the game by reaching 5 points first!"
        scores.textContent = `Your Score:${humanScore} Computer Score: ${computerScore}`
        startBtn.textContent = "Restart"
        container.append(scores, roundWinMessage, winMessage, startBtn)
    } else if (computerScore === 5) {
       container.innerHTML = ""
        let winMessage = document.createElement("h1")
        winMessage.textContent = "The Computer won the game by reaching 5 points first, try again!"
        scores.textContent = `Your Score:${humanScore} Computer Score: ${computerScore}`
        startBtn.textContent = "Restart"
        container.append(scores, roundWinMessage, winMessage, startBtn) 
    } else {
    scores.textContent = `Your Score:${humanScore} Computer Score: ${computerScore}`
    container.append(scores, roundWinMessage)
    }
}




function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * 3)]
}

function setHumanChoice() {
    humanChoice = event.target.textContent.toLowerCase()
}
    
}

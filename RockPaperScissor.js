let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


let drawGame = () => {
    console.log("Game draw, play again!");
    msg.innerText = "Game was draw, play again!";
    msg.style.backgroundColor = "black";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const playGame = (userChoice) => {
    console.log("user choice is", userChoice);
    //To generate computer choice, we made another func just above
    const compChoice = generateCompChoice();
    if (userChoice === compChoice){
        drawGame();
        } else{
        let userWin = true; //we assume our player won & we check our conditions
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        } else{
            userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
        }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
            console.log("choice was clicked");
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
    });
});
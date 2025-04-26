let computerScore = 0;
let userScore = 0;

const btn = document.querySelectorAll("button");
const result = document.querySelector("#result");
const cSelect = document.querySelector("#cSelect");
const uSelect = document.querySelector("#uSelect");
const body = document.querySelector("body");
const userScoreSpan = document.querySelector("#user_Score");
const compScoreSpan = document.querySelector("#computer_Score");
const hand = document.querySelector(".hand");
const h4 = document.querySelector("h4");

hand.onmouseenter = () => {
    h4.remove();
};

body.style.backgroundColor = "#3c5b6f";

const genComputerChoice = () => {
    let options = ["rock" , "paper" , "scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const draw = () =>{
    console.log("Game was Draw");
};

const showWin = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScoreSpan.innerText = userScore;
        console.log("You Win");
        result.innerHTML = ` YOU WIN`;
        result.style.backgroundColor = "rgb(0 , 255 , 64)";
        uSelect.innerText = `Your Choose  ${userChoice} `;
        cSelect.innerText = `Computer Choose  ${compChoice} `;

      
    } else{
        computerScore++;
        compScoreSpan.innerText = computerScore;
        console.log("You Lose !");
        result.innerHTML = "YOU LOSE!";
        result.style.backgroundColor = "#FE0000";
        uSelect.innerText = `Your Choose  ${userChoice} `;
        cSelect.innerText = `Computer Choose  ${compChoice} `;
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "#3c5b6f";
          } , 300);
      
    }
};

const playGame = (userChoice) => {
    console.log(" You Click = " , userChoice);
    const compChoice = genComputerChoice();
    console.log(" Comp Click = " , compChoice);

    if(userChoice === compChoice){
        draw();
        result.innerText = "DRAW";
        result.style.backgroundColor = "orange";
        uSelect.innerText = `Your Choose  ${userChoice} `;
        cSelect.innerText = `Computer Choose  ${compChoice} `;
        body.style.backgroundColor = "orange";
        setTimeout(function(){
            body.style.backgroundColor = "#3c5b6f";
          } , 300);
      
    } else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;

        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;

        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWin(userWin , userChoice , compChoice);
    }
};

btn.forEach((button) =>{
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("id");
        // console.log(button);
        playGame(userChoice);
    });

});

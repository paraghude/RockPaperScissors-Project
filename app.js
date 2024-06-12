let userScore = 0; //This variable use for track userScore
let compScore = 0; //This variable use for track compScore

const choices = document.querySelectorAll(".choice"); //Accessing the all choices
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const generateCompChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3) //Getting any random index ele form the array using this Math.random function and store it in varaible
    return options[randIdx]; //We are returning our random index value for computer choice
}

const drawGame = () => { //Creating draw game function
    msg.innerText = "Game was Draw. Try again.";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice) => { //Creating show winner function passing 'userWin' Attribute  in showWinner function
    if(userWin) { //if userWin == true then user is winner else comp winner
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generating Computer choice
    const compChoice = generateCompChoice(); //we are generating comp choice in generateCompChoice fun and return in playGame function
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice) { //Draw game
        drawGame();
    }else {
        let userWin = true; // userWin set to true
        if(userChoice === "rock") { //user choice is rock then that time -
            //then comp choice posibilities are 'scissors' and 'paper' 
            userWin = compChoice === "paper" ? false : true; //-if compChoice == paper we loose the game(false) otherwise we win the game(true)
        }
        else if(userChoice === "paper") {
            //then comp choice posibilities are 'scissors' and 'rock'
            userWin = compChoice === "scissors" ? false : true;
        }
        else { //els if (userChoice === "scissors") 
            //then comp choice posibilities are 'rock' and 'paper'
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice); //Showing winner
    }

}

choices.forEach((choice) => {  //Select each choice individually and
    choice.addEventListener("click", () => { //adding event on each individual choice
        const userChoice = choice.getAttribute("id");  //getting id of choice
        playGame(userChoice); 
    });
});
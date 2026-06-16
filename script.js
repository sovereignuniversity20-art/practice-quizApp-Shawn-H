/*const ks = document.getElementById("ksButton");
const tx = document.getElementById("txButton");
const mo = document.getElementById("moButton");
const ok = document.getElementById("okButton");
*/


const startButton = document.getElementById("start");
const contentBox = document.getElementById("content-box");
const qestionNumber = 0;
const questions = [ 
    {
        question: "Question 1. What state is San Antonio located in?", 
        choices: ["Kansas", "Texas", "Missouri", "Oklahoma"],
        answer: 1
    },
    {
        question: "Question 2. What is the longest river in the U.S?", 
        choices: ["Mississippi", "Missouri", "Delaware", "Meramec"],
        answer: 1 
    }, 
    {
        question: "Question 3. Which major US river flows north to south eventually reaching Canada?", 
        choices: ["Red River of the North", "Red River of the South", "Red River of the East", "Blue River"],
        answer: 0
    }, 
    {   question: "Question 4. What city was the first capital of Missouri?", 
        choices: ["Kansas City", "St. Louis", "Jefferson City", "St. Charles"],
        answer: 3
    }
];

startButton.addEventListener("click", function(event) {
    contentBox.innerHTML = "";
    const question = document.createElement("p");
    const answerButtonOne = document.createElement("button");
    const answerButtonTwo = document.createElement("button");
    const answerButtonThree = document.createElement("button");
    const answerButtonFour = document.createElement("button");
    const replyText = document.createElement("p");
    const nextButton = document.createElement("button");
    
})



//choices = { [Q1, {ks, tx, mo, ok}, index(2)]};

/*<p>Question 1. What state is St. Louis located in?</p>
        <button id="ksButton">Kansas</button>
        <button id="txButton">Texas</button> 
        <button id="moButton">Missouri</button>
        <button id="okButton">Oklahoma</button>
        <p></p>
        <button id="nextButton">Next Question</button>
*/

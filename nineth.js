let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};
const drawGame = ( ) =>{
    
    msg.innerText="game was draw";
    
  
};
const showWinner = (userWin,userChoice,CompChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    
    msg.innerText =`you win!your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor="green";
   
}else{
    compScore++;
    compScorePara.innerText=compScore;
    
    msg.innerText=`you lose! ${CompChoice} beats your ${userChoice}`;
  msg.style.backgroundColor="red";
   
}
}

const playGame = (userChoice) =>{
    //console.log("user choice=",userChoice);
//generate computer choice->modular ante oka paniki oka function use  cheyadam which are re useable         
const CompChoice=genCompChoice();
//console.log("comp choice=",CompChoice);

if(userChoice===CompChoice){
   // console.log("it is a draw");
   drawGame();
}else{
    let userWin =true;
    if(userChoice === "rock"){
       userWin = CompChoice==="paper"?false:true;
    } else if(userChoice === "paper"){
        userWin = CompChoice==="scissors"?false:true;
    }else{
        userWin = CompChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,CompChoice);
}



}; 

choices.forEach((choice) => {
choice.addEventListener("click",() => {
const userChoice = choice.getAttribute("id");

playGame(userChoice);
})
});

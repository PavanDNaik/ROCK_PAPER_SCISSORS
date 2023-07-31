
let wins = 0 ;
let lose = 0;
let draws = 0;

const w = document.getElementById("W");
const l = document.getElementById("L");
const result = document.getElementById("result");
const body = document.querySelector("body");
const display = document.createElement("div");
const decider = document.createElement("div");
const replay = document.createElement('button');
replay.textContent = "Replay";
function compute(){
    let val = Math.floor(Math.random() * 3);
    return val;
}

function getEquivalentName(num){
    if(num === 0)return "Rock";
    else if(num === 1)return "paper";
    else return "scissor";
}


function play(generated,user){
    if( generated === user){
        return -1;
    }
    else if( user === 0 && generated === 1){
        return 0;
    }
    else if( user === 1 && generated === 2){
        return 0;
    }
    else if( user === 2 && generated === 0){
        return 0;
    }
    else{
        return 1;
    }
};


function game(userChoice){
    if(lose >= 5 || wins >= 5)
    {
        return;
    }
    let computerChoice = compute();

    let res = play(computerChoice, userChoice);
    if( res === 1)
    {
        wins ++;
        result.textContent = ` You won this round!   ${getEquivalentName(userChoice)} beats ${getEquivalentName(computerChoice)}`;
    }
    else if( res === 0){
        lose ++;
        result.textContent = `You lost this round!   ${getEquivalentName(computerChoice)} beats ${getEquivalentName(userChoice)}`;
    }
    else{
        draws ++;
        result.textContent = `Its a draw!`;
    }
    w.textContent = `You: ${wins}`;
    l.textContent = `Computer: ${lose}`;
    if(lose >= 5 || wins >= 5){
        endGame();
    }
}


function endGame(){

    let res = `<br/>Number of wins: ${wins}<br/>Number of draw: ${draws}<br/>Number of lose: ${lose}<br/></br>`;
    let output;
    if(lose >= 5)
    {
    output=`You Lost :\(`;
    }  
    else {
    output=`You Won !! :\)`;
    }

    display.innerHTML = res;
    decider.textContent = output;
    body.appendChild(display);
    body.appendChild(decider);
    body.appendChild(replay);
    //reset Everything
    replay.addEventListener("click",()=>{
        body.removeChild(display);
        body.removeChild(decider);
        wins = 0;
        lose = 0;
        draws = 0;
        result.textContent = "";
        w.textContent = "";
        l.textContent = "";
        body.removeChild(replay);
    });
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");


rock.addEventListener("click",()=>{  game(0); });

paper.addEventListener("click",()=>{  game(1); });

scissor.addEventListener("click",()=>{  game(2); });


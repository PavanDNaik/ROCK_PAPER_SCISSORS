
function compute(){
    let val = Math.floor(Math.random()*3)+1;
    if(val == 1)
    {
        return "rock";
    }
    else if(val == 2)
    {
        return "paper";
    }
    else{
        return "scissor";
    }
}
(function RPS(){
    ComputerSelection = compute();
    PlayerSelection = prompt("Enter ur choice ");
    let los="lost";
    let win="won";
    if(ComputerSelection === PlayerSelection){
        console.log("ITS A DRAW");
    }
    else if(PlayerSelection === "rock")
    {
        if( ComputerSelection === "paper"){
            res(los,ComputerSelection,PlayerSelection);
        }
        else{
            res(win,PlayerSelection,ComputerSelection);
        }
    }
    else if(PlayerSelection === "paper"){
        if( ComputerSelection === "scissor"){
            res(los,ComputerSelection,PlayerSelection);
        }
        else{
            res(win,PlayerSelection,ComputerSelection);
        }
    }
    else{
        if( ComputerSelection === "rock"){
            res(los,ComputerSelection,PlayerSelection);
        }
        else{
            res(win,PlayerSelection,ComputerSelection);
        }
    }
})();
function res(result,winner,loser){
    console.log(`You ${result} because ${winner} beats ${loser}`);
}

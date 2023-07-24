
function compute(){
    let val = Math.floor(Math.random() * 3);
    return val;
}

function getEquivalentName(num){
    if(num === 0)return "Rock";
    else if(num === 1)return "paper";
    else return "scissor";
}

function convert(userChoice){
    if(userChoice.toUpperCase() === "ROCK"){
        return 0;
    }
    else if( userChoice.toUpperCase() === "PAPER"){
        return 1;
    }
    else {
        return 2;
    }
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

(function game(){
    
    let wins = 0 ;
    let lose = 0;
    let draws = 0;
    for(let i=1 ; i<6 ;i++)
    {
        let userChoice = prompt(`Round ${i}: Enter your choice`);
        let computerChoice = compute();
        let ConvertedUserChoice = convert(userChoice);
        let res = play(computerChoice, ConvertedUserChoice);
        if( res === 1)
        {
            wins += 1;
            console.log(`Round ${i}: You won this round because ${getEquivalentName(ConvertedUserChoice)} beats ${getEquivalentName(computerChoice)}`);
        }
        else if( res === 0){
            lose += 1;
            console.log(`Round ${i}: You lost this round because ${getEquivalentName(computerChoice)} beats ${getEquivalentName(ConvertedUserChoice)}`);
        }
        else{
            draws += 1;
            console.log(`Round ${i}: Its a draw`);
        }
    }
    console.log(`Number of wins: ${wins}`);
    console.log(`Number of lose: ${lose}`);
    console.log(`Number of draw: ${draws}`);
    console.log(`************************`);
    if(wins === lose)
    {
        console.log(`Its a draw :\|`);
    }
    else if( wins > lose){
        console.log(`You Won !! :\)`);
    }
    else{
        console.log(`You Lost :\(`);
    }
    console.log(`************************`);
})();

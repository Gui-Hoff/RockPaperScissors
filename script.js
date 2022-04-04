function computerPlay (){
    let number =Math.floor(Math.random()*3+1); //random number between 1 and 3
    let play;
    if (number ===1){
        play = 'rock';
       
    }else if(number ===2){
        play = 'paper';
       
    }else{
        play = 'scissors';
        
    }
    return play;
}


let playerSelection = theGame(window.prompt('Rock, Paper or Scissors?: '));

function theGame(player){

    let choice = player.toLowerCase();
    let computer = computerPlay();

    if(choice === 'paper'){
        if (computer === 'paper'){
            
            console.log('Draw!');

        }else if(computer === 'rock'){

            console.log('Rock ... You WIN!!!');
     
        }else {

            console.log('Scissors ...You LOSE!');

        }
    

    }else if (choice === 'rock'){
        
        if (computer === 'paper'){

            console.log('Paper ...You LOSE!');

        }else if(computer==='scissor'){

            console.log('Scissors ... You WIN!!!');

        }else{

            console.log('Draw!');

        }

    //choice === scissors    
    }else if(choice === 'scissors') {

        if(computer === 'paper'){

            console.log('Paper... You WIN!!!');

        }else if (computer === 'rock'){

            console.log('Rock ...You LOSE!');

        }else{

            console.log('Draw!');
        }

    }else if (choice!=='paper' && choice !=='rock' && choice !== 'scissors' ){
        console.log('Invalid option ...please choose again.');
    }
}




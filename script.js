
let points = 0;
let jankenPoints = 0;
let placar = document.getElementById('points');
placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`;
result.textContent = 'Choose your weapon';

    function computerPlay (){
    let number = Math.floor(Math.random()*3+1); //random number between 1 and 3
    let play;
    if (number === 1){
        play = 'rock';
       
    }else if(number === 2){
        play = 'paper';
       
    }else if (number === 3){
        play = 'scissors';
        
    }
    return play;
}

document.addEventListener('click', playRound);


function playRound(e) {
    
    let result = document.getElementById('result')
    let choice = e.target.textContent.toLowerCase();
    let computer = computerPlay();
    


    document.getElementById('tryAgain').addEventListener('click', reseting)
    
    //RESTING BUTTON
    function reseting (e){
        points = 0;
        jankenPoints = 0;
        result.txtContent = 'Rock, paper ou scissors?'
        placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`;
    }



//Ending game
if(points == 5 || jankenPoints == 5){
    return

//playing game
}else{
if (e.target.textContent === 'ROCK' || e.target.textContent === 'PAPER' || e.target.textContent === 'SCISSORS'){

    //Logica Jokenpo
    if(choice == 'paper'){
        if(computer == 'rock'){
    
            if(points < 4){
                points += 1;   
                result.textContent = 'Rock! ... You win...'
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`; 
            }else if(points == 4){
                points += 1;
                result.textContent = 'Best of 3?';
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`; 
            }
    
        }else if(computer == 'scissors'){
    
            if(jankenPoints < 4){
                jankenPoints += 1;
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`;
                result.textContent = 'Scissors! Ha Ha! You LOSE!'
            }else if(jankenPoints == 4){
                jankenPoints += 1;
                result.textContent = 'Janken the Great is the Greatest and the WINNER!!!'
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`; 
            }
        
    
        }else if(computer == 'paper'){
            result.textContent = 'Draw';
            placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`;
    
        }
    
    //Se choice = Pedra
    }else if(choice == 'rock'){
        if(computer == 'scissors'){
    
            if(points < 4){
                points += 1;   
                result.textContent = 'Scissors! ... You win...'
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`; 
            }else if(points == 4){
                points += 1;
                result.textContent = 'Best of 3?';
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`; 
            }
    
        }else if(computer == 'paper'){
    
            if(jankenPoints < 4){
                jankenPoints += 1;
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`;
                result.textContent = 'Paper! Ha Ha! You LOSE!'
            }else if(jankenPoints == 4){
                jankenPoints += 1;
                result.textContent = 'Janken the Great is the Greatest and the WINNER!!!'
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`; 
            }
    
        }else if (computer == 'rock'){
    
            result.textContent = 'Draw';
            placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`;
            
        }
    
    //Se choice = tesoura
    }else if(choice == 'scissors'){
        if(computer == 'paper'){
    
            if(points < 4){
                points += 1;   
                result.textContent = 'Paper! ... You win...'
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`; 
            }else if(points == 4){
                points += 1;
                result.textContent = 'Best of 3?';
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`; 
            }
    
        }else if(computer == 'rock'){
    
            if(jankenPoints < 4){
                jankenPoints += 1;
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`;
                result.textContent = 'Rock! Ha Ha! You LOSE!'
            }else if(jankenPoints == 4){
                jankenPoints += 1;
                result.textContent = 'Janken the Great is the Greatest and the WINNER!!!'
                placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`; 
            }
    
        }else if (computer == 'scissors'){
    
            result.textContent = 'Draw';
            placar.textContent = `You: ${points} Vs Janken The GREAT: ${jankenPoints}`;
            
        }
    }
}else {
    result.textContent = 'Choose your weapon'
}
} 
}
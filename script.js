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
    console.log(play);
    return play;
}

computerPlay();
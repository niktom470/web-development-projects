let score = JSON.parse(localStorage.getItem
       ('score'))||{
            wins: 0,
            lose: 0,
            tie: 0
        };
        
        updateScoreElement();
      
         let computerMove='';

     function pickComputerMove(){
         const randomNumber= Math.random();
    
           if(randomNumber>=0 && randomNumber<1/3){
             computerMove='rock';
            }else if(randomNumber>=1/3 && randomNumber<2/3){
             computerMove='scissors';
            }else if(randomNumber>= 2/3 && randomNumber<1){
              computerMove='paper';
            }
         return computerMove;
        }
     function playGame(playerMove){
          const computerMove= pickComputerMove();
           let result ='';
         if(playerMove==='rock'){
             if(computerMove === 'rock'){
             result = 'You tie.';
            }
             else if( computerMove === 'paper'){
              result = 'You lose.';
            }
              else{
              result = 'You win.';
            }
        }
         else if(playerMove === 'paper'){
      
             if(computerMove === 'rock'){
             result = 'You win.';
            }
             else if( computerMove === 'paper'){
             result = 'You tie.';
            }
              else{
              result = 'You lose.';
            }
   
        }
         else{
      
             if(computerMove === 'rock'){
             result = 'You lose.';
             }
             else if( computerMove === 'paper'){
             result = 'You win.';
            }
             else{
             result = 'You tie.';
            }
        }
        if(result==='You win.'){
            score.wins+=1;
        }else if(result==='You lose.'){
            score.lose+=1;
        }else{
            score.tie+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));
        
        updateScoreElement();

         document.querySelector('.js-result').innerHTML= result;

          document.querySelector('.js-moves').innerHTML= `You <img src="./${playerMove}-emoji.png" class="move-icon" alt="">
    <img src="./${computerMove}-emoji.png" alt="" class="move-icon">
      Computer`;
     
    }
          function updateScoreElement() {
          document.querySelector('.js-score').innerHTML=`
        Wins:${score.wins},Loses:${score.lose},Ties:
        ${score.tie}`;
    
    }
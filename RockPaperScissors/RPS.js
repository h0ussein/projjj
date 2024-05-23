


function ran() {

    let x = Math.floor(Math.random() * 3+1);
    return x;
    }
    
    let counter1=0;
    let counter2=0;
    function play(x) {
        let y = ran();
        let z;
        let me = document.getElementById("me");
        let computer = document.getElementById("computer");
        let result = document.getElementById("result");
        let score1 = document.getElementById(`score1`);
        let score2 = document.getElementById(`score2`);
        const image1 = document.getElementById(`image`);


        switch (y){
            case 1 :z=`rock`; 
            break;
            case 2 :z=`paper`; 
            break;
            case 3 :z=`scissors`; 
            break;
    
        }
   
        me.textContent=`you choose: ${x}`;
        computer.textContent=`the computer choose ${z}`;
    
    
        
            if (x === `rock` && z ===`rock` )
            result.textContent = "It's a tie on this round!";
        
    
            else if (x=== `rock` && z ===`paper` ){
                result.textContent = "you lose on this round!" ;
                counter2++;
            }
        
    
            else if (x=== `rock` && z ===`scissors` ){
            result.textContent = "you win on this round!";
            counter1++;
            }
            
    
            else if (x=== `paper` && z ===`paper` )
            result.textContent = "It's a tie on this round!";
    
            else if (x=== `paper` && z ===`rock` ){
            result.textContent  = "you win on this round!";
            counter1++;
            }
    
            else if (x=== `paper` && z ===`scissors` ){
            result.textContent  = "you lose on this round!";
            counter2++;
            }
    
            else if (x=== `scissors` && z ===`scissors` )
            result.textContent = "It's a tie on this round!";
            
    
            else if (x=== `scissors` && z ===`rock` ){
            result.textContent  = "you lose on this round!";
            counter2++;
            }
    
            else if (x=== `scissors` && z ===`paper` ){
            result.textContent = "you win on this round!";
            counter1++;
            }

          

            score1.textContent = `your score: ${counter1}`;
            score2.textContent = `your score: ${counter2}`;

            if(counter1>counter2){
                 document.getElementById(`finalresult`).textContent = "you win";
                 document.getElementById(`finalresult`).style.backgroundColor = `green`;
            }
            else  if(counter2>counter1){
                document.getElementById(`finalresult`).textContent = "you lose";
                document.getElementById(`finalresult`).style.backgroundColor = `red`;
            }

            else  { document.getElementById(`finalresult`).textContent = "its a tie";
                    document.getElementById(`finalresult`).style.backgroundColor = `yellow`;
        }


        
          
          
    
            if (x === `rock`){
                document.getElementById(`image`).src = "RPSimages/rock.jpeg"; 
            }
    
    
            if (x === `paper`){
                document.getElementById(`image`).src = "RPSimages/paper.jpeg"; 
            }
    
            if (x === `scissors`){
                document.getElementById(`image`).src = "RPSimages/scissors.jpeg"; 
            }
    
            if (z === `rock`){
                document.getElementById(`image1`).src = "RPSimages/rock.jpeg"; 
            }
    
    
            if (z === `paper`){
                document.getElementById(`image1`).src = "RPSimages/paper.jpeg"; 
            }
    
            if (z === `scissors`){
                document.getElementById(`image1`).src = "RPSimages/scissors.jpeg"; 

            }
    
        }






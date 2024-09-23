const playBtn= document.querySelector('button'); 
const winnerText=document.querySelector('h1'); 
const dice1url= document.getElementsByClassName("dice1")[0]; 
const dice2url= document.getElementsByClassName("dice2")[0]; 



playBtn.addEventListener('click', ()=>{
    let var1= Math.floor(Math.random()*6 +1); 
    let var2= Math.floor(Math.random()*6 +1); 
    dice1url.src= `/images/dice${var1}.png`; 
    dice2url.src= `/images/dice${var2}.png`; 

    if(var1===var2){
        winnerText.innerText="Draw"; 
    }else if(var1>var2){
        winnerText.innerText= "🚩 Player1 Wins"; 
    }else{
        winnerText.innerText= "Player2 Wins 🚩";
    }
})
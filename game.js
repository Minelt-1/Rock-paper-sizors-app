let rock = false;
let paper = false;
let sizors = false;

const result = document.querySelector(".result");
const botresult = document.querySelector(".botresult");
const totalresult = document.querySelector(".totalresult");
// when the user touches (rock paper sizors) then set one of them to true based on what user touched

document.querySelector(".rock").addEventListener("click", () =>{
    rock = true;
    botresultRock()
    result.innerHTML = "You played Rock"
}) 

document.querySelector(".paper").addEventListener("click", () =>{
    paper = true;
    botresultPaper()
   
    result.innerHTML = "You played Paper"
}) 

document.querySelector(".sizors").addEventListener("click", () =>{
    sizors = true;
    botresultSizors()
   
    result.innerHTML = "You played Sizors"
}) 

function botresultSizors(){
    const generate = Math.floor(Math.random() * 100);
    
    if (generate < 33.3){
       botresult.innerHTML = "Rock"
    }else if (generate < 66.6){
        botresult.innerHTML = "Paper"
    }else if (generate < 100){
        botresult.innerHTML = "Sizors"
    }else{
        botresult.innerHTML = "Error"
    }

    if (generate < 33.3 && sizors === true){
        totalresult.innerHTML = "Game over!"
    }else if (generate < 66.6 && sizors === true){
        totalresult.innerHTML = "Win"
    }else if (generate < 100 && sizors === true){
        totalresult.innerHTML = "Tie"
    }else{
        totalresult.innerHTML = "ERROR"
    }
}

function botresultRock(){
    const generate = Math.floor(Math.random() * 100);
    
    if (generate < 33.3){
       botresult.innerHTML = "Rock"
    }else if (generate < 66.6){
        botresult.innerHTML = "Paper"
    }else if (generate < 100){
        botresult.innerHTML = "Sizors"
    }else{
        botresult.innerHTML = "Error"
    }

    if (generate < 33.3 && rock === true){
         totalresult.innerHTML = "Tie"
    }else if (generate < 66.6 && rock === true){
        totalresult.innerHTML = "Game over!"
    }else if (generate < 100 && rock === true){
        totalresult.innerHTML = "Win"
    }
}


function botresultPaper(){
    const generate = Math.floor(Math.random() * 100);
    
    if (generate < 33.3){
       botresult.innerHTML = "Rock"
    }else if (generate < 66.6){
        botresult.innerHTML = "Paper"
    }else if (generate < 100){
        botresult.innerHTML = "Sizors"
    }else{
        botresult.innerHTML = "Error"
    }

    if (generate < 33.3 && paper === true){
        totalresult.innerHTML = "Win"
    }else if (generate < 66.6 && paper === true){
        totalresult.innerHTML = "Tie"
    }else if (generate < 100 && paper === true){
        totalresult.innerHTML = "Game over!"
    }

}


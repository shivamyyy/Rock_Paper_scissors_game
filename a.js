let userscore=1;
let compscore=1;

const msg=document.querySelector(".msg");
const uscore=document.querySelector("#us");
const cscore=document.querySelector("#cs");

const choices= document.querySelectorAll(".Choice");

const showWinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        console.log("You Win!!!")
        msg.innerText="You choice "+userchoice+" "+"beats "+compchoice+" !!! YOU WIN !!!";
        msg.style.backgroundColor = "green";
      uscore.innerText= userscore++;
    }
    else{
        console.log("You Lose...")
        msg.innerText="computer choice "+compchoice+ " beats "+userchoice+"  ! YOU LOST...";
        cscore.innerText= compscore++;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice=()=>{
    let option=["rock", "paper", "scissors"];
    let indx=Math.floor(Math.random()*3);
    return option[indx];
}

const playGame=(userchoice)=>{
    console.log("Your choose = " + userchoice);
    const compchoice=genCompChoice();
    console.log("Computer choose = "+compchoice);


    if(userchoice==compchoice){
        console.log("game is Draw!!")
        msg.innerText="game is Draw!! Play again...";
        msg.style.backgroundColor = "purple";

    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice=="paper"?false: true;

        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissors" ? false: true;
        }
        else{
            userwin=compchoice=="rock"? false:true;
        }
        showWinner(userwin ,userchoice, compchoice);
    }
}

choices.forEach((Choice)=>{
//console.log(Choice);
Choice.addEventListener("click",()=>{
    const userchoice= Choice.getAttribute("id");
//console.log("choice was "+userchoice +" clicked");
playGame(userchoice);

})


})
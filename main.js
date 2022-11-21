console.log("welcome to tictactoe game");
let music = new Audio("./tictactoe/music.mp3");
let gover = new Audio("./tictactoe/gameover.mp3");
let turnvoice = new Audio("./tictactoe/ting.mp3");

let imgele = document.querySelector(".imgbox").getElementsByTagName('img')[0];


let isgameover = false;
let turn = "X";

// func to change turn
let changeturn = ()=>{
    return turn === "X"? "O" : "X";
}

// func to check win

let checkwin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        // 3 indexs , values of tranform property , width property
        [0,1,2,5,5,0,20],
        [3,4,5,5,15,0,20],
        [6,7,8,5,25,0,20],
        [0,3,6,-5,15,90,20],
        [1,4,7,5,15,90,20],
        [2,5,8,15,15,90,20],
        [0,4,8,2.7,15,45,25],
        [2,4,6,2.7,15,135,25]
    ]

    wins.forEach((e)=>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText=== boxtext[e[2]].innerText && boxtext[e[0]].innerText !== ''){
            document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + " won";
            isgameover = true;
            imgele.style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = `${e[6]}vw`;
            gover.play();
        }
    })
}

// to add elements while playing
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if(!isgameover){
                turnvoice.play();
                document.getElementsByClassName("info")[0].innerHTML = "turn for " + turn;
            }
        }
    })
})


// for reset button

document.getElementById("reset").addEventListener('click',()=>{
    Array.from(boxes).forEach((element)=>{
        let boxtext = element.querySelector(".boxtext");
        boxtext.innerText = "";
    })

    turn = "X";
    document.getElementsByClassName("info")[0].innerHTML = "turn for " + turn;
    imgele.style.width = 0;
    isgameover = false;
    document.querySelector(".line").style.width = 0;
})
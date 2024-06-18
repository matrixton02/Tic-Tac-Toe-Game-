let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgcon=document.querySelector(".msg_container");
let msg=document.querySelector(".message");
let ngame=document.querySelector("#new");
let turnO=true;//playerX,playerO

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,7],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked")
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const newGame=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    turnO=true;
    msg.classList.add("hide");
    msg.innerText="Winner"
}

const display_winner=(winner)=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
    msg.innerText=msg.innerText+" "+winner;
    msg.classList.remove("hide");    
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                display_winner(pos1val);
            }
        }
    }
}

ngame.addEventListener("click",newGame);
reset.addEventListener("click",newGame);
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgcontiner = document.querySelector(".msg-continer");
let msg = document.querySelector(".msg");
let newbtn = document.querySelector("#new");

//tuen of two plyer
let turnof = true;
let count = 0; //to track drow condition

//wining pattern is save as 2-D array
winningpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//if game is drow then this function is exicute
const drowgame = () => {
  msg.innerText = "Game is Drow..!"; //change the inner text
  msgcontiner.classList.remove("hide");
  disableboxes();
};

//reset the game and this functin we used callback of add event lisnter
const reset = () => {
  turnof = true;
  count = 0; //we click on reset or new btton that time count is o
  enableboxes(); //call the enable function
  msgcontiner.classList.add("hide");
};

//user click new game button that time all butuns are enable
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// after winning the game other buttun are disables..
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//showing winner and remove class of hidden
const showwinner = (winner) => {
  msg.innerText = `Congratulations winner is ${winner}`;
  msgcontiner.classList.remove("hide");
  disableboxes();
};

const checkwinner = () => {
  for (let pattern of winningpattern) {
    let pos1vlu = boxes[pattern[0]].innerText;
    let pos2vlu = boxes[pattern[1]].innerText;
    let pos3vlu = boxes[pattern[2]].innerText;

    //checking value is not empti that time if stament is exicute
    if (pos1vlu != "" && pos2vlu != "" && pos3vlu != "") {
      if (pos1vlu === pos2vlu && pos2vlu == pos3vlu) {
        showwinner(pos1vlu);
        return true; //adding value of iswiinner variable
      }
    }
  }
};

//Applaing event listanar fo every button to add forEach loop
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //aplaing if statement to change the turrn
    if (turnof === true) {
      box.innerText = "x";
      box.style.color = "red";
      turnof = false;
    } else {
      box.innerText = "o";
      box.style.color = "blue";
      turnof = true;
    }

    //diseble the button after used
    box.disabled = true;
    count++;
    //function calling and storing is at variable
    let iswinner = checkwinner();

    //if user click 9 time but winner not found its mine game is drow

    if (count === 9 && !iswinner) {
      drowgame();
    }
  });
});
//add event lisner to reset button and pass the rest functon as a parmetter
//callback fuction is a higher oder functions
resetbtn.addEventListener("click", reset);
newbtn.addEventListener("click", reset);

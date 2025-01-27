let boxes = document.querySelectorAll(".click");
let resetbtn = document.querySelector("#reset");
let newBtn = document.querySelector("#submit");
let msgContanier = document.querySelector(".msg-contanier");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turn0 = true;
    enableboxes();
    msgContanier.classList.add("hide");
};

boxes.forEach((click) => {
    click.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            click.innerText = "O";
            turn0 = false;
        } else {
            click.innerText = "X"
            turn0 = true;
        }
        click.disabled = true;

        checkWinner();


    });
});


const disabledBtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations..🥳Winner is ${winner}`;
    msgContanier.classList.remove("hide");
    disabledBtns();
}
const checkWinner = () => {
    for (let pattern of winpatterns) {
        let player1 = boxes[pattern[0]].innerText;
        let player2 = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (player1 != "" && player2 != "" && pos3val != "") {
            if (player1 === player2 && player2 === pos3val) {
                console.log("winner", player1);
                showWinner(player1);

            }

        }
    }
};

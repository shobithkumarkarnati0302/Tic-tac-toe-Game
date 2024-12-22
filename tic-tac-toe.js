let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let btn6 = document.querySelector("#btn6")
let btn7 = document.querySelector("#btn7")
let btn8 = document.querySelector("#btn8")
let btn9 = document.querySelector("#btn9")
let reset = document.querySelector("#reset")
let start = document.querySelector("#start")
let score1 = document.querySelector("#score1")
let score2 = document.querySelector("#score2")

let c = 1;
let player1Symbol = "";
let player2Symbol = "";

//Logic to Check Winner
function checkWin() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6],            // diagonals
    ];

    const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    const values = buttons.map(btn => btn.textContent);

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (values[a] && values[a] === values[b] && values[a] === values[c]) {
            setTimeout(() => {
                const winner = values[a] === player1Symbol ? "Player 1" : "Player 2";
                alert(`${winner} is the winner!`);
                disableAllButtons();
            }, 100);
            return true;
        }
    }

    if (values.every(val => val !== '')) {
        setTimeout(() => {
            alert("It's a draw!");
        }, 100);
        return true;
    }

    return false;
}


btn1.addEventListener("click", () => handleClick(btn1));
btn2.addEventListener("click", () => handleClick(btn2));
btn3.addEventListener("click", () => handleClick(btn3));
btn4.addEventListener("click", () => handleClick(btn4));
btn5.addEventListener("click", () => handleClick(btn5));
btn6.addEventListener("click", () => handleClick(btn6));
btn7.addEventListener("click", () => handleClick(btn7));
btn8.addEventListener("click", () => handleClick(btn8));
btn9.addEventListener("click", () => handleClick(btn9));

//Generating Symbols for player 1 and 2 randomly
function assignSymbols() {
    if (Math.random() > 0.5) {
        player1Symbol = "x";
        player2Symbol = "0";
    } else {
        player1Symbol = "0";
        player2Symbol = "x";
    }
    // alert(`Player 1 is ${player1Symbol}, Player 2 is ${player2Symbol}`);
    score1.innerHTML = `Player 1 is ${player1Symbol}`
    score2.innerHTML = `Player 2 is ${player2Symbol}`
}

start.addEventListener("click", () => {
    assignSymbols();
    for (let i = 1; i <= 9; i++) {
        const btn = document.getElementById(`btn${i}`);
        btn.innerHTML = '';
        btn.disabled = false;
    }
    c = 1;
});

function handleClick(btn) {
    if (c % 2 === 0) {
        btn.textContent = player2Symbol;
    } else {
        btn.textContent = player1Symbol;
    }
    c++;
    btn.disabled = true;
    checkWin();
}

function disableAllButtons() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`btn${i}`).disabled = true;
    }
}

reset.addEventListener("click", () => {
    for (let i = 1; i <= 9; i++) {
        const btn = document.getElementById(`btn${i}`);
        btn.innerHTML = '';
        btn.disabled = false; 
        score1.innerHTML = ''
        score2.innerHTML = ''
    }
    c = 1;
    disableAllButtons();
});
const main = document.querySelector("main");
const wins = document.createElement("h3");
const ties = document.createElement("h3");
const losses = document.createElement("h3");
const fback = document.createElement("p");

wins.textContent = "Wins: 0";
ties.textContent = "Ties: 0";
losses.textContent = "Losses: 0";
fback.textContent = "";

main.appendChild(wins);
main.appendChild(ties);
main.appendChild(losses);
main.appendChild(fback);

const rock = document.querySelector('#first');
const paper = document.querySelector('#second');
const scissors = document.querySelector('#third');

let winCount = 0;
let tieCount = 0;
let lossCount = 0;

rock.addEventListener('click', function() {
    const user = "r";
    rand(user);
});

paper.addEventListener('click', function() {
    const user = "p";
    rand(user);
});

scissors.addEventListener('click', function() {
    const user = "s";
    rand(user);
});

function rand(input) {

    let num = Math.floor(Math.random() * 3);
    let comp;

    if (num === 0) {
        comp = "r";
    } else if (num === 1) {
        comp = "p";
    } else {
        comp = "s";
    }

    if (input === comp) {
        tieCount++;
        ties.textContent = `Ties: ${tieCount}`;
        fback.textContent = `It's a tie! You both chose ${input}.`;
    } else if (input === "r" && comp === "s") {
        winCount++;
        wins.textContent = `Wins: ${winCount}`;
        fback.textContent = `You won! You picked ${input}, which beats ${comp}.`;
    } else if (input === "r" && comp === "p") {
        lossCount++;
        losses.textContent = `Losses: ${lossCount}`;
        fback.textContent = `Sorry, you lost. You picked ${input}, which loses to ${comp}.`;
    } else if (input === "s" && comp === "r") {
        lossCount++;
        losses.textContent = `Losses: ${lossCount}`;
        fback.textContent = `Sorry, you lost. You picked ${input}, which loses to ${comp}.`;
    } else if (input === "s" && comp === "p") {
        winCount++;
        wins.textContent = `Wins: ${winCount}`;
        fback.textContent = `You won! You picked ${input}, which beats ${comp}.`;
    } else if (input === "p" && comp === "r") {
        winCount++;
        wins.textContent = `Wins: ${winCount}`;
        fback.textContent = `You won! You picked ${input}, which beats ${comp}.`;
    } else if (input === "p" && comp === "s") {
        lossCount++;
        losses.textContent = `Losses: ${lossCount}`;
        fback.textContent = `Sorry, you lost. You picked ${input}, which loses to ${comp}.`;
    }
}
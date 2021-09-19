let hScore = 0;
let cScore = 0;
let gameCount = 5;

for (i = 1; i < gameCount; i++) {
    game();
}

function game() {

    function computerChoice() {
        ai = Math.floor((Math.random() * 3) + 1);
        if (ai == 1) {
            comp = 'rock';
        } else if (ai == 2) {
            comp = 'paper';
        } else if (ai == 3) {
            comp = 'scissors';
        }
        console.log(comp);
        return comp;
    }
    computerChoice();

    function humanChoice() {
        input = prompt('Rock, Paper or Scissors?');
        //input = input.toLowerCase;
        return input;
    }
    humanChoice();

    function round(first, second) {


        if (comp == input) {
            alert('it is a tie');
            console.log(gameCount);
        } else if (comp == 'rock' && input == 'paper') {
            altert('you win, paper covers rock');
            console.log(gameCount);
            hScore++;
        } else if (comp == 'rock' && input == 'scissors') {
            alert('you lose, rock crush scissors');
            console.log(gameCount);
            cScore++;
        } else if (comp == 'scissors' && input == 'paper') {
            alert('you lose, scissors cut paper');
            console.log(gameCount);
            cScore++;
        } else if (comp == 'scissors' && input == 'rock') {
            alert('you win, rock crush scissors');
            console.log(gameCount);
            hScore++;
        } else if (comp == 'paper' && input == 'rock') {
            alert('you lose, paper covers rock');
            console.log(gameCount);
            cScore++;
        } else if (comp == 'paper' && input == 'scissors') {
            alert('you win, scissors cut paper');
            console.log(gameCount);
            hScore++;
        }
    }
    round(comp, input);
}
game();

if (hScore < cScore) {
    alert('computer wins');
} else if (hScore > cScore) {
    alert('human wins');
} else {
    alert('In the in end you tie');
}

document.getElementById('round').innerHTML = 'Game Count: ' +
    gameCount;
document.getElementById('compS').innerHTML = 'Computer Score: ' +
    cScore;
document.getElementById('humS').innerHTML = 'Human Score: ' +
    hScore;
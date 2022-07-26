const p1 = {
    score: 0,
    button: document.querySelector('#p1butt'),
    display: document.querySelector('#p1dis')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2butt'),
    display: document.querySelector('#p2dis')
}

const reset = document.querySelector('#reset');
const playNum = document.querySelector('#playnum');

let winScore = 1;
let gameOver = false;

function updateScore(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        if (player.score === winScore) {
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});

reset.addEventListener('click', resetter);

playNum.addEventListener('change', function () {
    winScore = parseInt(this.value);
    resetter();
});

function resetter() {
    gameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
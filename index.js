"use strict";

function eventListener(_block, score, count) {
    _block = addEventListener('click', (e) => {
        e.preventDefault();
        score += 1;
        count.textContent = String(score);
        console.log(score);
    });
}

function main () {
    const panelsElements = document.querySelector('.wrapper');
    const dashboardScores = document.querySelector('.dashboard');   
    let blocks = {
        red: panelsElements.querySelector('.red'),
        green: panelsElements.querySelector('.green'),
        blue: panelsElements.querySelector('.blue')
    };
    let counters = {
        red: dashboardScores.querySelector('.red-counter'),
        green: dashboardScores.querySelector('.green-counter'),
        blue: dashboardScores.querySelector('.blue-counter')
    };
    let scores = {
        red: 0,
        green: 0,
        blue: 0
    };
    eventListener(blocks.red, scores.red, counters.red);
    eventListener(blocks.green, scores.green, counters.green);
    eventListener(blocks.blue, scores.blue, counters.blue);
}

main();
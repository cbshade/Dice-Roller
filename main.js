let rolls = 0;
const dieRoll = new Array(0);
let totalRolled = 0;

function dieRolls() {
    const input = document.querySelector('#rollsInput');
    rolls = input.value;
    while (rolls > 0) {
        console.log(rolls);
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        dieRoll.push(randomNumber);
        totalRolled += randomNumber;
        console.log(dieRoll);
        rolls--;
        setTimeout(showRolls, 2000);

    }
}

function showRolls() {
    document.getElementById("dicevalues").innerHTML = "You rolled: " + dieRoll;
    document.getElementById("total").innerHTML = "Your total is: " + totalRolled;
}

document.getElementById("rollButton").addEventListener("click", function () {
    document.getElementById("dicevalues").innerHTML = "You rolled: ";
    document.getElementById("total").innerHTML = "Your total is: ";
    rolls = 0;
    dieRoll.length = 0;
    totalRolled = 0;

});

document.getElementById("rollButton").addEventListener("click", dieRolls);



//document.getElementById("form").addEventListener("submit", updateText {});




//create function to capture die rolls
        //create dieRoll array
//listen for button click



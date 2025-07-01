const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


console.log(answer)

let attempt = 0
let guess;
let running = true;

while (running) {
    guess = window.prompt(`guess a number between  ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if (isNaN (guess)) {
        alert("enter a valid number")
    } else if(guess < minNum || guess > maxNum) {
        alert ("enter a valid number")
    } else {
        attempt++;
        if (guess < answer)  {
            alert("too low, try again")
        } else if (guess > answer) {
            alert("too high, try again")
        } else {
            alert(`you got it in ${attempt} attempts. it took you ${attempt} attempts to guess the number ${answer}`)
            running = false
        }

    }}
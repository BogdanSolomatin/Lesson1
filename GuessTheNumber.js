const DIGIT = Math.floor(Math.random() * (10 - 1) + 1);

let limit = 5;
let flag = false;

do {
    limit--;
    flag = check(prompt('Input the number'),right,more,less);
    if(flag) break;
} while (limit > 0);

if(limit == 0)  alert('You have not guessed the number for a given number of attempts');

function check (ans, rightAns, moreThan, lessThan) {
    return ans == DIGIT ? rightAns() : ans > DIGIT ? moreThan() : lessThan();
}

function right() {
    alert('Yes, It is right answer');
    return true;
}

function more() {
    alert('More than');
    return false;
}

function less() {
    alert('Less than');
    return false;
}

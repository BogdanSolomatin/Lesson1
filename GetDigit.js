let getDigitSum = value => {
    let sum = 0;
    while (value > 0) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    return Math.floor(sum);
}

alert(getDigitSum(parseInt(prompt('Input value'))));
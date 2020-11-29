"use strict";

let arr = [45,78,10,3];

let my = (a, b) => a > b ? -1 : a < b ? 1 : 0;

let getDigitSum = value => {
    let sum = 0;

    while (value > 0) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }

    return Math.floor(sum);
}

let newArr = arr.sort(my).map(value => getDigitSum(value));

console.log(newArr);
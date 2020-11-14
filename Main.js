"use strict";

let userFirstName = 'Bogdan';
let userLastName = 'Solomatin';
let userBirthDay = prompt("Inpit your day of birth");
let userBirthMonth = prompt("Input your month of birth");
let userBirthYear = prompt("Input your year of birth");
let userAge = solveAge(userBirthYear);

alert("First name: " + userFirstName + "\nLast name: " + userLastName + "\nDay of birth: " + userBirthDay
   +"\nMonth of birth: "+ userBirthMonth + "\nYear of birth: " + userBirthYear+"\nAge: " + solveAge(userBirthYear));

function solveAge(Birthyear){
   return 2020 - Birthyear;
}
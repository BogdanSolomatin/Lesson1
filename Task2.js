"use strict";

let thirdCity = {};
let fourthCity = Object.assign({}, secondCity);

for (let key in firstCity) {
    thirdCity[key] = firstCity[key];
}

thirdCity.name = 'Magnitogorsk';
thirdCity.established = new Date(2020, 12, 30);
fourthCity.name = 'Dortmund';
fourthCity.established = new Date(1999, 5, 15);

const showAllCitiesInformation = function() { return this.info(); }

thirdCity.f = showAllCitiesInformation;
fourthCity.f = showAllCitiesInformation;

console.log(thirdCity.f());
console.log(fourthCity.f());


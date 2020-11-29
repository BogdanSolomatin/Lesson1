"use strict";

const fifthCity = {
    name: 'Saint Petersburg',
    established: new Date(2020, 8, 31),
    population: 250000,
    country: 'Russia',
}

const sixthCity = {
    name: 'Madrid',
    established: new Date(1995, 2, 3),
    population: 490000,
    country: 'Spain',
}

let cities = [firstCity, secondCity, thirdCity, fourthCity, fifthCity, sixthCity];

function sortByPopulation(cities) {
    cities.sort((city1, city2) => city1.population > city2.population ? 1 :
        city1.population === city2.population ? 0 : -1);
}

sortByPopulation(cities);

console.log(cities);
"use strict";

const firstCity = {
    name: 'Berlin',
    established: new Date(2000, 1, 1),
    population: 50000,
    country: 'Germany',
};

const secondCity = {
    name: 'Moscow',
    established: new Date(2020, 11, 29),
    population: 100000,
    country: 'Russia',
};

const showFullInformation = function() {
    return `City ${this.name} was established in ${this.established}. Location - ${this.country}, population ${this.population}`;
}

let compareLength = (first, second) => {
    if (checker(first, second, 'name')) {
        let res = first.name.length > second.name.length ? 'more' :
            first.name.length < second.name.length ? 'less ' : 'equals number';

        return `City ${first.name} contains ${res} symbols than city ${second.name}`;
    } else return 'Object doesnt contains property for check';
}

function compareEstablished(first, second) {
    if (checker(first, second, 'established')) {
        let res = first.established < second.established ? 'older than' :
            first.established > second.established ? 'younger than' : 'same established as';

        return `${first.name} is ${res} ${second.name}`;
    } else return 'Object doesnt contains property for check';
}

function comparePopulation(first, second) {
    if (checker(first,second, 'population')) {
        let res = first.population > second.population ? 'more than' :
        first.population < second.population ? 'less than' : 'equal to';

    return `Population in city ${first.name} ${res} population in city ${second.name}`;
    } else return 'Object doesnt contains property for check';
}

function checker(first, second, property) {
    return property in first && property in second;
}

firstCity.info = showFullInformation;
secondCity.info = showFullInformation;

console.log(compareLength(firstCity, secondCity));
console.warn(compareEstablished(firstCity, secondCity));
console.error(comparePopulation(firstCity, secondCity));
console.log(firstCity.info());
console.log(secondCity.info());
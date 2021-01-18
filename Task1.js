"use strict"

const order = {
    name : undefined,
    description : 'Description',
    cost : 5,
    currency : 'Euro',
    "company manufacturer" : 'Open source',
    "production date" : undefined
};

const unfilledOrder = Object.assign({}, order);
unfilledOrder.name = 'Test name'; //For check messages in function
delete unfilledOrder.description;
delete unfilledOrder.cost;
delete unfilledOrder.currency;


function showInfo(obj) {

    let {name = 'Program', description : desc = 'Program calculator', cost, currency : curr = 'Rub',
        'company manufacturer' : creator = 'I', 'production date' : date = 'Yesterday'} = obj;

    return function() {
        Object.entries(obj).forEach(([key, value]) => {
            if (value == undefined && key !== 'cost') {
                console.log(`Key ${key} will get value by default`);
            }

        });

        if (typeof (cost) !== 'number' || Math.sign(cost) !== 1) {
            cost = 1;
            console.log(`Invalid cost, will set value by default`);
        }


        return [name, desc, cost, curr, creator, date];
    }
}

console.log(showInfo(order)());
console.warn(showInfo(unfilledOrder)());

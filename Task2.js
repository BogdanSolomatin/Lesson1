let order1 = {
    name : 'Name 1',
    description : 'Description 1',
    cost : 100,
    currency : 'Euro',
    size : 10,
    weight : 15,
    'company manufacturer' : 'Company 1',
    'production date' : new Date(2021, 1, 17)
}

let order2 = {
    name : 'Name 2',
    description : 'Description 2',
    cost : 50,
    currency : 'Rub',
    size : 15,
    weight : 10,
    'company manufacturer' : 'Company 2',
    'production date' : new Date(2000, 1, 1)
}

let order3 = {
    name : 'Name 3',
    description : 'Description 3',
    cost : 200,
    currency : 'Sterling',
    size : 14,
    weight : 7,
    'company manufacturer' : 'Company 3',
    'production date' : new Date(2020, 12, 31)
}

let orderList = [order1, order2, order3];


createHead(order1);

for (let i = 0; i < orderList.length; i++) {
    addRow(orderList[i], i);
}

let inputs = document.getElementsByTagName("a");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", myFunction);
}


function addRow(obj, i) {
    let tableBody = document.getElementById('tbody');
    let newRow = document.createElement('tr');
    let flag = false;

    for(let [key, value] of Object.entries(obj)){
        if (!flag) {
            let newCell = document.createElement('td');
            let temp = 'Task2Item.html';
            newCell.innerHTML = `<a href = ${temp} id = ${i}>${value}</a>`;
            newRow.appendChild(newCell);
            flag = true;
            continue;
        }
        let newCell = document.createElement('td');
        newCell.textContent = value.toString();
        newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
}

function createHead(obj) {
    let tableBody = document.getElementById('tbody');
    let newRow = document.createElement('tr');

    for (let [key, value] of Object.entries(obj)) {
        let newCell = document.createElement('td');
        newCell.textContent = key[0].toUpperCase() + key.slice(1);
        newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
}

function myFunction() {
    localStorage.setItem('key', JSON.stringify(orderList[this.id]));
}

let linkMain = document.createElement('p');
linkMain.innerHTML = '<a href = Task2.html>Go to main page</a>';

let linkTwo = document.createElement('p');
linkTwo.innerHTML = '<a href = Task2Page2.html>Go to page with table</a>';

document.body.append(linkMain);
document.body.append(linkTwo);
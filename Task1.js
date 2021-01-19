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
    addRow(orderList[i], -1);
}

function delRow(current) {
    let temp = current.closest('tr');
    temp.parentElement.removeChild(temp);
}


function addRow(obj, index) {
    let tableBody = document.getElementById('tbody');
    let newRow = tableBody.insertRow(index);
    let i = 0;
    let flag = false;

    for (let [key, value] of Object.entries(obj)) {
        let newCell = newRow.insertCell(i);
        newCell.textContent = value.toString();
        i++;
        if (!flag) {
            newCell.onclick = function() {showInfo(this);};
            flag = true;
        }
    }

    let newCell = newRow.insertCell(i);
    newCell.innerHTML = `<button onclick = delRow(this)>Delete this row</button>`;
}

function createHead(obj) {
    let tableBody = document.getElementById('thead');
    let newRow = document.createElement('tr');

    for (let [key, value] of Object.entries(obj)) {
        let newCell = document.createElement('th');
        newCell.textContent = key[0].toUpperCase() + key.slice(1);
        newRow.appendChild(newCell);
    }

    let newCell = document.createElement('th');
    newCell.textContent = 'Manage';
    newRow.appendChild(newCell);
    tableBody.appendChild(newRow);
}


let header = ['Items', 'a or Id', 'b or Class', 'c or Tag', 'total'];
let values = ['table.forum tr:hover p (0,2,3)', '#catalog .col3 .height div(1,2,1)', 'a.new > #newOrder > span:visited(1,2,2)',
    '.menu ul li:last-child(0,2,2)', '#content.three-col(1,1,0)', 'h1 + .block_title(0,1,1)', '#newPage h2#lastHeader > span.smallFont(2,1,2)'];
let objects = [];


createHead();
createObjects();

for (let i = 0; i < values.length; i++) {
    addRow(objects[i]);
}


function createObjects() {
    for (let i = 0; i < values.length; i++) {
        let res = getRes(values[i]);
        let item = {name : values[i], a : Number(res.split(',')[0]), b : Number(res.split(',')[1]), c : Number(res.split(',')[2]),
            total : Number(res.split(',')[0]) * 100 + Number(res.split(',')[1]) * 10 + Number(res.split(',')[2])};
        objects.push(item);
    }

    return objects;
}

function getRes(str) {
    let regex = /\(([^)]+)\)/;
    let matches = regex.exec(str);

    return matches[1];
}

function addRow(obj) {
    let tableBody = document.getElementById('mybody');
    let newRow = document.createElement('tr');

    let flag = false;

    for(let [key, value] of Object.entries(obj)){
        if (!flag) {
            let newCell = document.createElement('td');
            newCell.textContent = value.split('(')[0];
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

function createHead() {
    let tableBody = document.getElementById('mybody');
    let newRow = document.createElement('tr');

    for (let i = 0; i < header.length; i++) {
        let newCell = document.createElement('td');
        newCell.textContent = header[i];
        newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
}
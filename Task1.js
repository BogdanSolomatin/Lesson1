let xhr = new XMLHttpRequest();
let url = new URL('http://45.67.59.109:2001/orders');
let orderList = {};
let body = document.getElementsByTagName('body')[0];
let div = document.createElement('div');
let tempdiv = document.createElement('div');
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');


table.setAttribute('id', 'mytable');
table.setAttribute('align', 'center');
thead.setAttribute('id', 'thead');
tbody.setAttribute('id', 'tbody');
tempdiv.style.display = 'none';
table.appendChild(thead);
table.appendChild(tbody);
div.append(table);
body.append(div);
body.append(tempdiv);


makeRequest('GET', url)
    .then(data => {
        parse(data);
        orderList = data;
    })
    .catch(err => alert(err));


function request(method, url, obj = null, callback) {
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    xhr.onload = () => {
        if (xhr.status !== 200) callback(new Error(`${xhr.status} - ${xhr.statusText}`));
        else callback(null, JSON.parse(xhr.response));
    }
    xhr.onerror = () => callback(new Error(`${xhr.status} - ${xhr.statusText}`));
    xhr.send(JSON.stringify(obj));
}

function makeRequest(method, url, obj) {
    return new Promise(((resolve, reject) => {
        request(method, url, obj, (err, data) => {
            if (err) {reject(err)}
            else {resolve(data)}
        });
    }));
}

function parse(arr) {
    createHead(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        addRow(arr[i], -1);
    }
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

        if (key === 'name') {
            newCell.onclick = function() {showInfo(this);};
            flag = true;
        }
    }
}

function createHead(header) {
    let tableBody = document.getElementById('thead');
    let newRow = document.createElement('tr');

    for (let [key, value] of Object.entries(header)) {
        let newCell = document.createElement('th');
        newCell.textContent = key[0].toUpperCase() + key.slice(1);
        newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
}


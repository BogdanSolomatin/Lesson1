createGenerator(order1);

function insertNew() {
    let obj = Object.assign({}, order1);

    for (let [key, value] of Object.entries(obj)) {
        if (key === 'production date') {
            if (document.getElementById('date').value === '') obj[key] = new Date(2021, 1, 19);
            else {
                obj[key] = new Date(document.getElementById('date').value);
                document.getElementById('date').value = "";
            }
        }
        else if (key === 'company manufacturer') {
            if (document.getElementById('company').value === '') obj[key] = key;
            else {
                obj[key] = document.getElementById('company').value;
                document.getElementById('company').value = "";
            }
        }
        else {
            if (document.getElementById(key).value === "" && typeof(value) !== 'number') obj[key] = key;
            else if (document.getElementById(key).value === "" && typeof(value) === 'number') obj[key] = 0;
            else {
                obj[key] = document.getElementById(key).value;
                document.getElementById(key).value = "";
            }
        }

    }

    let table = document.getElementById('tbody')
    addRow(obj, table.rows.length-1);
}

function createGenerator(obj) {
    let tableBody = document.getElementById('tbody');
    let newRow = tableBody.insertRow(-1);
    let i = 0;

    for (let [key, value] of Object.entries(obj)) {
        let newCell = newRow.insertCell(i);
        let val;
        switch (typeof(obj[key])) {
            case "string":
                val = "text";
                break;
            case "number":
                val = "number";
                break;
            case "object":
                val = "date";
                break;
        }

        if (val === 'date') newCell.innerHTML = `<input type = ${val} id = ${'date'} value = ${'2021-01-19'}>`;
        else if (val === 'number') newCell.innerHTML = `<input type = ${val} id = ${key} min = ${0} value = ${0}>`; //Only positive numbers
        else newCell.innerHTML = `<input type = ${val} id = ${key.split(' ')[0]} value = ${key[0].toUpperCase() + key.slice(1)}>`;
        //If just use id which contains two words, it'll error. I tried it many times
        i++;
    }

    let newCell = newRow.insertCell(i);
    newCell.innerHTML = `<button onclick = insertNew() class = ${'insert'}>Insert new</button>`;
}

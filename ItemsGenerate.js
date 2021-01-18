document.body.innerHTML = null;

let tempObj = JSON.parse(localStorage.getItem('key'));
console.error(tempObj);

let h = document.createElement('h1');
h.innerText = tempObj.name;

let p = document.createElement('p');
p.innerText = tempObj.description;

let list = document.createElement('ul');

for (let [key, value] of Object.entries(tempObj)) {
    if (key === 'name' || key === 'description') continue;
    else {
        let li = document.createElement('li');
        li.innerText = `${key} : ${tempObj[key]}`;
        list.appendChild(li);
    }
}

document.body.append(h);
document.body.append(p);
document.body.append(list);


let linkMain = document.createElement('p');
linkMain.innerHTML = '<a href = Task2.html>Go to main page</a>';

let linkTwo = document.createElement('p');
linkTwo.innerHTML = '<a href = Task2Page2.html>Go to page with table</a>';

document.body.append(linkMain);
document.body.append(linkTwo);
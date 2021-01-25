function showInfo(obj) {
    let temp = obj.closest('tr');
    url = new URL('http://45.67.59.109:2001/order');
    url.searchParams.set('id', temp.getElementsByTagName('td')[0].innerText);

    makeRequest('GET', url)
        .then(data => {
            tempdiv.style.display = 'inline';
            table.style.display = 'none';
            for (let [key, value] of Object.entries(data)) {
                tempdiv.innerHTML += `${key} : ${value} <br>`;
            }

            let btn = document.createElement('button');
            let p = document.createElement('button');

            btn.onclick = function () {clear(btn);};
            p.onclick = function () {
                clear(p);
                pay(data);
            }
            btn.innerText = 'Go back';
            p.innerText = 'Pay';

            tempdiv.append(p);
            tempdiv.append(btn);
        })
        .catch(err => alert(err));
}

function clear(item) {
    table.style.display = 'table';
    item.parentElement.removeChild(item);
    tempdiv.innerHTML = '';
}
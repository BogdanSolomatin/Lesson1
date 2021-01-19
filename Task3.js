function showInfo(obj) {
    document.getElementById('showItem').innerText = "";

    let temp = obj.closest('tr');
    for (let i = 0; i < 8; i++) {
        document.getElementById('showItem').innerText += document.getElementsByTagName('th')[i].innerText
            + " : " + temp.getElementsByTagName('td')[i].innerText + "\n";

    }

}
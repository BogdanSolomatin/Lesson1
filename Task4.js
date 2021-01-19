let table = document.querySelector('table');

table.addEventListener('click', e => {
    let cell = e.target;

    if (cell.tagName === 'BUTTON') {
        //&& !cell.classList.contains('insert')
        console.warn(`Current row: ${cell.closest('tr').rowIndex}`);
    }

    if (cell.tagName.toLowerCase() !== 'td') return;
    console.warn(`Current row: ${cell.parentNode.rowIndex}`);
}, true);
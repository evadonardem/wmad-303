const awesomeMultTableFormRb = document.querySelector('#awesomeMultTableFormRb');

awesomeMultTableFormRb.onsubmit = (event) => {
    event.preventDefault();
    const rows = document.querySelector('input[name="rows"]').value;
    const cols = document.querySelector('input[name="columns"]').value;

    const multCols = document.getElementById('multCols');
    let colsHeader = '<th></th>';
    for (let i = 1; i <= cols; i++) {
        colsHeader += `<th>${i}</th>`;
    }
    multCols.innerHTML = colsHeader;

    const multRows = document.getElementById('multRows');
    let tableRows = '';

    for (let i = 1; i <= rows; i++) {
        tableRows += '<tr>';
        tableRows += `<th scope="row">${i}</th>`;
        for (let j = 1; j <= cols; j++) {
            const product = i * j;
            const colorClass = product % 2 === 0 ? 'table-success' : 'table-danger';
            tableRows += `<td class="${colorClass}">${product}</td>`;
        }
        tableRows += '</tr>';
    }
    multRows.innerHTML = tableRows;
};
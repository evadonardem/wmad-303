const awesomeMultTableFormWE = document.querySelector('#awesomeMultTableFormWE');

awesomeMultTableFormWE.onsubmit = (event) => {
    event.preventDefault();
    const rows = parseInt(document.querySelector('[name="rows"]').value);
    const cols = parseInt(document.querySelector('[name="cols"]').value);

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
            const prod = i * j;
            const isEven = prod % 2 === 0 ? 'table-success' : 'table-danger';
            tableRows += `<td class="${isEven} text-center">${prod}</td>`; // Added text-center class
        }
        tableRows += '</tr>';
    }
    multRows.innerHTML = tableRows; 
}

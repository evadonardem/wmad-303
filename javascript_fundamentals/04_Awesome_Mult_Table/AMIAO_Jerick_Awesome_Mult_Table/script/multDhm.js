
const awesomeMultTableFormJba = document.querySelector('#awesomeMultTableFormJba');

awesomeMultTableFormJba.onsubmit = (event) => {
    event.preventDefault();
    const rows = document.querySelector('[name="rows"]').value;
    const cols = document.querySelector('[name="cols"]').value;

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
        tableRows += `<th scope="row">${i}</th>`
        for (let j = 1; j <= cols; j++) {
            const prod = i * j;
            const isEven = prod % 2 === 0 ? 'success' : 'danger';
            tableRows += `<td>
                <p class="alert alert-${isEven}">
                ${prod}</td>`
        }
        tableRows += '</tr>';
    }
    multRows.innerHTML = tableRows; // Inject the table rows
};
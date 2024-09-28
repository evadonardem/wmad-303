const awesomeMultTableFormWE = document.querySelector('#awesomeMultTableFormWE');

awesomeMultTableFormWE.onsubmit = (event) => {
    event.preventDefault();

    const rows = document.querySelector('[name="rows"]').value;
    const cols = document.querySelector('[name="cols"]').value;

    const multCols = document.getElementById('multCols');
    let colsHeader = '<th></th>'; // Start with an empty header cell

    // Generate column headers
    for (let i = 1; i <= cols; i++) {
        colsHeader += `<th>${i}</th>`;
    }
    multCols.innerHTML = colsHeader;

    const multRows = document.getElementById('multRows');
    let tableRows = '';

    // Generate rows
    for (let i = 1; i <= rows; i++) {
        tableRows += '<tr>';
        tableRows += `<th scope="row">${i}</th>`; // Row header
        for (let j = 1; j <= cols; j++) {
            const prod = i * j;
            const isEven = prod % 2 === 0 ? 'success' : 'danger';
            tableRows += ` 
            <td class="text-center">
                <p class="alert alert-${isEven} mb-0">${prod}</p>
            </td>`;
        }
        tableRows += '</tr>';
    }
    multRows.innerHTML = tableRows;
};

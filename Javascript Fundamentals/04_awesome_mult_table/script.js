const awesomeMultTableFormKdn = document.querySelector('#awesomeMultTableFormKdn');

awesomeMultTableFormKdn.onsubmit = (event) => {
    event.preventDefault();
    const rows = document.querySelector('input[name="rows"]').value;
    const cols = document.querySelector('input[name="columns"]').value;

    const multCols = document.getElementById('multCols');
    let colsHeader = '<th scope="col"></th>';
    for (let i = 1; i <= cols; i++) {
        colsHeader += `<th scope="col">${i}</th>`;
    }
    multCols.innerHTML = colsHeader;
    const multRows = document.getElementById('multRows');
    let tableRows = '';
    for (let i = 1; i <= rows; i++) {
        tableRows += '<tr>';
        tableRows += `<th scope="row" class="bg-primary text-white">${i}</th>`; 
        for (let j = 1; j <= cols; j++) {
            const prod = i * j;
            let cellColor;
            if (prod % 10 === 0) {
                cellColor = 'alert-info'; 
            } else if (prod % 5 === 0) {
                cellColor = 'alert-warning'; 
            } else if (prod % 2 === 0) {
                cellColor = 'alert-success'; 
            } else {
                cellColor = 'alert-danger'; 
            }
            tableRows += `<td><p class="alert ${cellColor}">${prod}</p></td>`;
        }
        tableRows += '</tr>';
    }
    multRows.innerHTML = tableRows;
};

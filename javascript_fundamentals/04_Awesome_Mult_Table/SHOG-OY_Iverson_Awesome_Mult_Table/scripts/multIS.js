const awesomeMultTableFormIS = 
document.querySelector('#awesomeMultTableFormIS');

awesomeMultTableFormIS.onsubmit = (event) => {
    event.preventDefault();
    
    const rows = document.querySelector('input[name="rows"]').value;
    const cols = document.querySelector('input[name="columns"]').value;

    const multCols = document.getElementById('multCols');
    let colsHeader = '<th></th>';
    for (let i = 1; i <= cols; i++) {
        colsHeader += `<th> ${i} </th>`;
    }
    multCols.innerHTML = colsHeader;

    const multRows = document.getElementById('multRows');
    let tableRows ='';
    for (let i = 1; i < rows; i++){
        tableRows += '<tr>';
        tableRows += `<th scope="rows"> ${i} </th>`
        for (let j = 1; j <= cols; j++){
            const prod = i * j;
            const isEven = prod % 2 === 0 ? 'success' : 'danger';
            tableRows += `<td> 
                <p class="alert alert-${isEven}">
                    ${prod}
                </p>
            </td>`;
        }
        tableRows += '</tr>';
    }
    multRows.innerHTML = tableRows;
}
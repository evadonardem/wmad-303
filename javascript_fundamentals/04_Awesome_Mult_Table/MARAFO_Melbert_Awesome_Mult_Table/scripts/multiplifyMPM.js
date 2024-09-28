const rowses = document.getElementById("rowses");
const columnses = document.getElementById("columnses");
const formsness = document.getElementById("formsness");


formsness.onsubmit = (e) => {
    e.preventDefault();
    
    const rows = rowses.value;
    const cols = columnses.value;

    const tabbelCols = document.getElementById('tabbelCols');
    let colsHeader = '<th></th>';
    for (let i = 1; i <= cols; i++) {
        colsHeader += `<th> ${i} </th>`;
    }
    tabbelCols.innerHTML = colsHeader;

    const tabbelRows = document.getElementById('tabbelRows');
    let tableRows ='';
    for (let i = 1; i <= rows; i++){
        tableRows += '<tr>';
        tableRows += `<th scope="rows"> ${i} </th>`
        for (let j = 1; j <= cols; j++){
            const prod = i * j;
            const isEven = prod % 2 === 0 ? 'success' : 'danger';
            tableRows += `<td> 
                <h4 class="alert alert-${isEven}">
                    ${prod}
                </h4>
            </td>`;
        }
        tableRows += '</tr>';
    }
    tabbelRows.innerHTML = tableRows;
}
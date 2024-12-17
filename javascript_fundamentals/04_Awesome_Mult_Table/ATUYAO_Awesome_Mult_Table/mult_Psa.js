const COLOR_ODD = 'red';
const COLOR_EVEN = 'green';

function generateTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    let tableHtml = '<table class="table table-bordered"><thead><tr>';

    for (let i = 1; i <= cols; i++) {
        tableHtml += `<th>${i}</th>`;
    }
    tableHtml += '</tr></thead><tbody>';

    for (let r = 1; r <= rows; r++) {
        tableHtml += '<tr>';
        for (let c = 1; c <= cols; c++) {
            const product = r * c;
            const color = product % 2 === 0 ? COLOR_EVEN : COLOR_ODD;
            tableHtml += `<td style="background-color: ${color}; color: white;">${product}</td>`;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</tbody></table>';

    document.getElementById('tableContainer').innerHTML = tableHtml;
}
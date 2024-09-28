document.getElementById('submitBtn').addEventListener('click', function() {
    const numRows = parseInt(document.getElementById('numRows').value);
    const numCols = parseInt(document.getElementById('numCols').value);
    const tableHeader = document.getElementById('tableHeader');
    const tableBody = document.getElementById('tableBody');

    tableHeader.innerHTML = '';
    tableBody.innerHTML = '';

    const th = document.createElement('th');
    th.innerText = 'Row';
    tableHeader.appendChild(th);
    for (let i = 1; i <= numCols; i++) {
        const th = document.createElement('th');
        th.innerText = `Column ${i}`;
        tableHeader.appendChild(th);
    }

    let evenCount = 0;
    let oddCount = 0; 

    for (let i = 1; i <= numRows; i++) {
        const tr = document.createElement('tr');

        const rowNum = document.createElement('td');
        rowNum.innerText = i;
        tr.appendChild(rowNum);

        for (let j = 1; j <= numCols; j++) {
            const td = document.createElement('td');
            const result = i * j;
            td.innerText = result;
            
            if (result % 2 === 0) {
                td.style.backgroundColor = '#c8e6c9'; 
                evenCount++;
            } else {
                td.style.backgroundColor = '#ffcdd2';
                oddCount++;
            }
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }

    // Clear previous count display if exists
    const existingCountDisplay = document.getElementById('countDisplay');
    if (existingCountDisplay) {
        existingCountDisplay.remove();
    }

    // Create a new count display
    const countDisplay = document.createElement('div');
    countDisplay.id = 'countDisplay'; // Set an ID for future reference
    countDisplay.innerHTML = `<h5>Even Numbers: ${evenCount}</h5><h5>Odd Numbers: ${oddCount}</h5>`;
    tableBody.insertAdjacentElement('afterend', countDisplay); // Insert counts after the table
});

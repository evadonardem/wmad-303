document.getElementById('submitBtn').addEventListener('click', function() {
    const numRows = parseInt(document.getElementById('numRows').value);
    const numCols = parseInt(document.getElementById('numCols').value);
    const tableBody = document.getElementById('tableBody');

    // Clear previous table data
    tableBody.innerHTML = '';

    // Create multiplication table rows and cells
    for (let i = 1; i <= numRows; i++) {
      const tr = document.createElement('tr');
      
      // Add an empty cell for the first column
      const tdEmpty = document.createElement('td');
      tr.appendChild(tdEmpty);

      for (let j = 1; j <= numCols; j++) {
        const td = document.createElement('td');
        const result = i * j;

        // Set background color based on even/odd
        td.style.backgroundColor = (result % 2 === 0) ? '#28a745' : '#dc3545'; // Green for even, red for odd
        td.style.color = 'white'; // Set text color to white for better contrast
        td.innerText = result; // Multiplication result
        tr.appendChild(td);
      }
      tableBody.appendChild(tr);
    }
  });
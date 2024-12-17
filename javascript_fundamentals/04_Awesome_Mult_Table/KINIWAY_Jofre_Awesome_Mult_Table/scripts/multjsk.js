const awesomeMultTableForm = document.querySelector('#awesomeform');
const tableBody = document.querySelector('#multirows');

awesomeMultTableForm.onsubmit = function(event) {
    event.preventDefault();
    const rows = parseInt(document.querySelector('input[name="rows"]').value);
    const cols = parseInt(document.querySelector('input[name="columns"]').value);
    
    tableBody.innerHTML = ''; 

    for (let i = 1; i <= rows; i++) {
        const newRow = document.createElement('tr');
        
        for (let j = 1; j <= cols; j++) {
            const newCell = document.createElement('td');
            const product = i * j;
            const alertDiv = document.createElement('div');
            
            alertDiv.textContent = product; 
            alertDiv.style.padding = '5px';
            alertDiv.style.borderRadius = '5px';
            alertDiv.style.color = 'white';
            alertDiv.style.backgroundColor = (product % 2 === 0) ? 'green' : 'red';
            alertDiv.style.display = 'flex';          // Use flexbox for centering
            alertDiv.style.alignItems = 'center';     // Center vertically
            alertDiv.style.justifyContent = 'center'; // Center horizontally
            
            newCell.appendChild(alertDiv);
            newRow.appendChild(newCell);
        }
        
        tableBody.appendChild(newRow);
    }
}

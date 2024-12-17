const awesomeMultTableFormSB = document.querySelector('#awesomeMultTableFormSb');

awesomeMultTableFormSB.onsubmit = (event) => {
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
    const primeNumbers = new Set(); 

    for (let i = 1; i <= rows; i++) {
        tableRows += '<tr>';
        tableRows += `<th scope="row">${i}</th>`;
        for (let j = 1; j <= cols; j++) {
            const prod = i * j;
            const isEven = prod % 2 === 0 ? 'success' : 'danger';
            tableRows += `<td>
                <div class="alert alert-${isEven} m-0" style="font-size: 1.2em;">
                ${prod}</div></td>`;
            
            
            if (isPrime(prod)) {
                primeNumbers.add(prod);
            }
        }
        tableRows += '</tr>';
    }
    multRows.innerHTML = tableRows; 

    document.getElementById('primeNumbers').textContent = Array.from(primeNumbers).join(', ') || 'None';
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

const elem = document.querySelector('.table')

const createTable = (parent, rows, columns) => {
    let table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let column = document.createElement('td');
            row.appendChild(column);
        }
        table.appendChild(row)
    }
    parent.appendChild(table);
}
createTable(elem, 3, 13)

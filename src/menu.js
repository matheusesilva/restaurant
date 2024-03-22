import menuList from './data.csv';

export function menu () {
    const content = document.querySelector('.content');
    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    content.innerHTML = '';
    content.className = '';
    content.className = 'content menu';
    title.innerHTML = 'This is our delicious menu';
    paragraph.innerHTML = 'These are the best meals you can get in the city';
    
    const table = document.createElement('table');
    let row,data;
    
    menuList.forEach(array => {
        row = document.createElement('tr');
        array.forEach(cell => {
            data = document.createElement('td');
            data.innerHTML = cell;
            row.appendChild(data);
        });
        table.appendChild(row);
    });
    
    content.append(title,paragraph,table);

}

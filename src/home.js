import homeImage from './home.png';

export function home () {
    const content = document.querySelector('.content');
    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    const container = document.createElement('div');
    const image = new Image();
    image.src = homeImage;
    content.innerHTML = '';
    content.className = '';
    content.className = 'content home';
    title.innerHTML = 'This is the title';
    paragraph.innerHTML = 'This is a paragraph showing why you should book a table and have a dinner at our restaurant';
    container.append(title,paragraph);
    content.append(container,image);
}
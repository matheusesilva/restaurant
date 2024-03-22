export function contact () {
    const content = document.querySelector('.content');
    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    content.innerHTML = '';
    content.className = '';
    content.className = 'content contact';
    title.innerHTML = 'Get in contact with us';
    paragraph.innerHTML = 'Let us know about your experience and help us improve our service';

    const form = document.createElement('form');
    const formFields = ['Name','Email','Message'];
    formFields.forEach(field => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        label.innerHTML = field;
        label.setAttribute('for',field);
        input.setAttribute('type','text');
        input.setAttribute('id',field);
        input.setAttribute('name',field);
        form.append(label,input);
    });

    content.append(title,paragraph,form);
}
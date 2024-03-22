import './index.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

const pages = {home,menu,contact};

const buttons = document.querySelectorAll('nav button');
buttons.forEach(btn => {
    btn.addEventListener ('click', (event) => {
        pages[event.target.id]();
    });
});

pages.home();
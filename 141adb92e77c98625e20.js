import './styles.css';
require('./styles.css');

console.log('JavaScript is running!');

import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createAboutPage } from './about.js';
import { createMaidsPage } from './maids.js';

const contentDiv = document.getElementById('content');
const buttons = document.querySelectorAll('button');

const pages = {
  'home-btn': createHomePage,
  'menu-btn': createMenuPage,
  'about-btn': createAboutPage,
  'maids-btn': createMaidsPage,
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    contentDiv.innerHTML = '';
    pages[button.id](contentDiv);
  });
});

createHomePage(contentDiv); // Load home page by default
document.getElementById('home-btn').classList.add('active'); // Add active class to home button by default
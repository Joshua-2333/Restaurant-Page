import './styles.css';

console.log('JavaScript is running!');

import { createMenuPage } from './menu.js';
import { createAboutPage } from './about.js';
import { createMaidsPage } from './maids.js';
import { createHomePage } from './home.js'; // Import createHomePage function

const contentDiv = document.getElementById('content');
const logo = document.getElementById('logo'); // Get the logo element
const buttons = document.querySelectorAll('button');

const pages = {
  'menu-btn': createMenuPage,
  'about-btn': createAboutPage,
  'maids-btn': createMaidsPage,
};

// Get all tab buttons
const tabButtons = document.querySelectorAll('.tab-button');

// Function to update tab button colors
function updateTabButtonColors() {
  // Get the current page
  const currentPage = window.location.pathname;

  // Loop through each tab button
  tabButtons.forEach((button) => {
    // Get the button's href attribute
    const href = button.getAttribute('href');

    // Check if the button's href matches the current page
    if (href === currentPage) {
      // Add the active class to the button
      button.classList.add('active');
    } else {
      // Remove the active class from the button
      button.classList.remove('active');
    }
  });
}

// Call the function to update tab button colors on page load
updateTabButtonColors();

// Call the function to update tab button colors on page change
window.addEventListener('popstate', updateTabButtonColors);

// Add event listener to logo
logo.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  createHomePage(contentDiv);
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    contentDiv.innerHTML = '';
    pages[button.id](contentDiv);
  });
});

// Load home page by default
createHomePage(contentDiv);

// Remove reference to home-btn
// document.getElementById('home-btn').classList.add('active');
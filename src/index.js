// Import the styles.css file to apply CSS styles to the HTML document
import './styles.css';

// Log a message to the console to confirm that JavaScript is running
console.log('JavaScript is running!');

// Import functions from other JavaScript files to create different pages
import { createMenuPage } from './menu.js';
import { createAboutPage } from './about.js';
import { createMaidsPage } from './maids.js';
import { createHomePage } from './home.js'; // Import createHomePage function

// Get references to HTML elements on the page
const contentDiv = document.getElementById('content'); // Container for page content
const logo = document.getElementById('logo'); // Logo element
const buttons = document.querySelectorAll('button'); // All button elements on the page

// Define an object that maps button IDs to page creation functions
const pages = {
  'menu-btn': createMenuPage,
  'about-btn': createAboutPage,
  'maids-btn': createMaidsPage,
};

// Get all tab buttons on the page (assuming they have a class of 'tab-button')
const tabButtons = document.querySelectorAll('.tab-button');

// Define a function to update the colors of tab buttons based on the current page
function updateTabButtonColors() {
  // Get the current page URL
  const currentPage = window.location.pathname;

  // Loop through each tab button
  tabButtons.forEach((button) => {
    // Get the button's href attribute
    const href = button.getAttribute('href');

    // Check if the button's href matches the current page
    if (href === currentPage) {
      // Add the 'active' class to the button to highlight it
      button.classList.add('active');
    } else {
      // Remove the 'active' class from the button
      button.classList.remove('active');
    }
  });
}

// Call the updateTabButtonColors function when the page loads
updateTabButtonColors();

// Call the updateTabButtonColors function when the page changes (e.g. when the user navigates back or forward)
window.addEventListener('popstate', updateTabButtonColors);

// Add an event listener to the logo element to handle clicks
logo.addEventListener('click', () => {
  // Clear the content of the contentDiv element
  contentDiv.innerHTML = '';
  // Create the home page and append it to the contentDiv element
  createHomePage(contentDiv);
});

// Add event listeners to each button element to handle clicks
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the 'active' class from all buttons
    buttons.forEach((b) => b.classList.remove('active'));
    // Add the 'active' class to the clicked button
    button.classList.add('active');
    // Clear the content of the contentDiv element
    contentDiv.innerHTML = '';
    // Create the corresponding page and append it to the contentDiv element
    pages[button.id](contentDiv);
  });
});

// Load the home page by default when the script runs
createHomePage(contentDiv);
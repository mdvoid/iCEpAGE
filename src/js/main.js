import { initNavbar } from './components/navbar.js';
import { initHero } from './components/hero.js';
import { initProducts } from './components/products.js';
import { initAbout } from './components/about.js';
import { initContact } from './components/contact.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHero();
  initProducts();
  initAbout();
  initContact();
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
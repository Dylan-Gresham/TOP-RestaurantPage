// Imports
import css from './index.css'
import {initialize} from './initialize.js';

// Code
const contentDiv = document.createElement('div');
contentDiv.id = 'content';

// Initialize page
initialize(contentDiv);

document.body.appendChild(contentDiv);

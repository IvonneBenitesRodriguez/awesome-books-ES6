import BookCollection from './modules/app.js';
import AppBookCollection from './modules/display.js';

import { updateTimeDisplay } from './modules/time.js';

const bookCollection = new BookCollection();
const appBookCollection = new AppBookCollection();

appBookCollection.displayBooks();

const form = document.getElementById('bookForm');
const addButton = form.querySelector('button[type="submit"]');

addButton.addEventListener('click', (event) => {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    bookCollection.addBook(event);
    appBookCollection.displayBooks();
    titleInput.value = '';
    authorInput.value = '';
  } else {
    appBookCollection.displayBooks();
  }
});

// creating a Luxon Datetime instance

// Formatting the date as a string

updateTimeDisplay();

setInterval(() => {
  updateTimeDisplay();
}, 1000);

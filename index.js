import { DateTime } from './modules/luxon.js';
import BookCollection from './modules/app.js';
import AppBookCollection from './modules/display.js';

// import { updateTimeDisplay } from './modules/time.js';

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
const updateTimeDisplay = () => {
  const timeDisplay = document.getElementById('timeDisplay');
  const currentDate = DateTime.now();
  // Formatting the date as a string
  const formattedDate = currentDate.toLocaleString(DateTime.DATETIME_FULL);
  timeDisplay.textContent = formattedDate;
};
// updateTimeDisplay();
updateTimeDisplay();
setInterval(updateTimeDisplay, 1000);

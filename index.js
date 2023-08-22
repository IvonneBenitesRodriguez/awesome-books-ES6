import {BookCollection} from './modules/app.js';
import {AppBookCollection} from './modules/display.js';
import {DateTime} from 'https://cdn.skypack.dev/luxon';

const bookCollection = new BookCollection();
console.log(bookCollection);
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookForm');
    const addButton = form.querySelector('button[type="submit"]');
    addButton.addEventListener('click', (event) =>{
        event.preventDefault();
        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();

        if (title && author) {
            const bookCollection = new BookCollection(); // Move this line here
            const appBookCollection = new AppBookCollection(); // Move this line here

            bookCollection.addBookToCollection(title, author);
            appBookCollection.displayBooks();
            titleInput.value = '';
            authorInput.value = '';
        }
        });
    });
    
    // Display books initially when the page loads

    const form = document.getElementById('bookForm');
    console.log(form);
    const addButton = form.querySelector('button[type="submit"]');
    console.log(addButton);
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(addButton);

        const bookCollection = new BookCollection();

        const appBookCollection = new AppBookCollection();
    
        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();

        if (title && author) {
            bookCollection.addBookToCollection(title, author);
            appBookCollection.displayBooks(); // Update the display
            titleInput.value = '';
            authorInput.value = '';
        }
    });



const appBookCollection = new AppBookCollection();
appBookCollection.displayBooks();

//Create a Luxon DateTime instance 
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
const formattedDate = currentDate;
console.log(formattedDate);


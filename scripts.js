const submitButton = document.querySelector("#addBook");
const userInput = document.querySelector(".bookForm");
const inputs = document.querySelectorAll('input');
const bookShelf = document.querySelector('#bookshelf');


let myLibrary = [];

function Book(title, author, pages, read) {
this.title = title
this.author = author
this.pages = pages
this.read = read
this.info = function() {
return this.title + " " + "by " + this.author + ", " + this.pages + ", " + this.read;
};
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')


function addBooktoLibrary() {
let newBook = new Book(
    document.querySelector("#titleName").value,
    document.querySelector("#authorName").value,
    document.querySelector("#numberOfPages").value,
    document.querySelector("#readYet").value,
);
myLibrary.push(newBook);
console.log(myLibrary);
};

function displayLibrary() {
myLibrary.forEach(book => {
const novel = document.createElement('div');
const removeButton = document.createElement('button')
novel.classList.add('addedBook');
novel.textContent = `Title: ${book.title} \r\n 
Author: ${book.author} \r\n 
Number of pages: ${book.pages} \r\n
Read?: ${book.read} \r\n`;
removeButton.classList.add('removeBtn');
removeButton.textContent = 'Remove';
removeButton.addEventListener('click', deleteButton);
novel.appendChild(removeButton)
bookShelf.appendChild(novel); 
});
};

function deleteButton() {
const booksToRemove = document.getElementsByClassName("addedBook")
while(booksToRemove.length > 0) {
    booksToRemove[0].parentNode.removeChild(booksToRemove[0]);
};
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBooktoLibrary();
    displayLibrary();
    inputs.forEach(input => input.value = '');
});
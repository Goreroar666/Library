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

function addBooktoLibrary() {
    let newBook = new Book(
    document.querySelector("#titleName").value,
    document.querySelector("#authorName").value,
    document.querySelector("#numberOfPages").value,
    document.querySelector("#readYet").value,
);
    myLibrary.push(newBook);
    setLocalStorage();
    console.log(myLibrary);
};

function displayLibrary() {
    bookShelf.innerHTML = ''; 
    myLibrary.forEach(book => {
    const bookToAdd = document.createElement('div');
    const removeButton = document.createElement('button');
    const readButton = document.createElement('button');

    bookToAdd.classList.add('addedBook');
    bookToAdd.textContent = `Title: ${book.title} \r\n 
    Author: ${book.author} \r\n 
    Number of pages: ${book.pages} \r\n`;

    readButton.classList.add('readBtn');
     if(book.read===false) {
    readButton.textContent = 'Not read';
    readButton.style.background = '#B22222';
}      else {
    readButton.textContent = 'Read';
    readButton.style.background = '#006400';
};
    readButton.addEventListener('click', () => {
    book.read = !book.read;
    displayLibrary();
    setLocalStorage();
});

    removeButton.classList.add('removeBtn');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', deleteBook);

    bookToAdd.appendChild(readButton);
    bookToAdd.appendChild(removeButton);
    bookShelf.appendChild(bookToAdd); 
});
};

function deleteBook(e) {
    e.target.parentElement.remove();
    myLibrary.splice(e.target, 1);
    setLocalStorage();
};

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBooktoLibrary();
    displayLibrary();
    document.getElementById("bookInput").reset();
});

function setLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
};

function getLocalstorage() {
    if(!localStorage.myLibrary) {
    displayLibrary();
} else {
    let savedLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    myLibrary = savedLibrary;
    displayLibrary();
}
};
getLocalstorage();
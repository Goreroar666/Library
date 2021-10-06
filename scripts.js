const submitButton = document.querySelector("#addBook");
const userInput = document.querySelector(".bookForm");
const inputs = document.querySelectorAll('input');

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

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBooktoLibrary();
    inputs.forEach(input => input.value = '');
});
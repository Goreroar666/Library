const pushBook = document.getElementById("addBook");

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
    let title = document.getElementById("titleName").value;
    let author = document.getElementById("authorName").value;
    let pages = document.getElementById("numberOfPages").value;
    let read = document.getElementById("readYet").value;
const newBook = new Book(title, author, pages, read);
myLibrary.push(newBook);
console.log(myLibrary);
};

pushBook.addEventListener('click', addBooktoLibrary());
pushBook.addEventListener('click', function(event) {
    event.preventDefault();
});
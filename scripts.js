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

const userInput = document.querySelector(".bookForm");
function addBooktoLibrary() {
    newBook = {
        title : document.getElementById("titleName").value,
        author : document.getElementById("authorName").value,
        pages : document.getElementById("numberOfPages").value,
        read : document.getElementById("readYet").value,
    }
myLibrary.push(newBook);
console.log(myLibrary);
};

userInput.addEventListener('click', addBooktoLibrary());
userInput.addEventListener('click', function(event) {
    event.preventDefault();
});
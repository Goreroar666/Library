const pushBook = document.getElementById("addBook");
const submitButton = document.getElementById("addBook");

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
        let title = document.querySelector("#titleName").value;
        let author = document.querySelector("#authorName").value;
        let pages = document.querySelector("#numberOfPages").value;
        let read = document.querySelector("#readYet").value;
let newBook = new Book(title, author, pages, read);
myLibrary.push(newBook);
console.log(myLibrary);
};

submitButton.addEventListener('click', addBooktoLibrary());
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
});
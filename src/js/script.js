/**
 * Variables
 */

let addButton = document.getElementById("add-button");
let divForm = document.getElementById("addBookForm");
let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookPages = document.getElementById("pages");
let submitButton = document.getElementById("submit");
let radioyes = document.getElementById("yes");
let radiono = document.getElementById("no");
let main = document.getElementById("main");

/**
 * empty book Array
 */

let myLibrary = [];

/**
 * Add Book on click event
 */

addButton.addEventListener('click', popUp);

/**
 * Display Form
 */

function popUp() {
    divForm.classList.add('popUp');
}


/**
 * Add book To array and empty fields after submittion
 */

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (
        bookTitle.value !== "" &&
        bookAuthor.value !== "" &&
        bookPages.value !== ""
    ) {
        addBookToLibrary();
        bookTitle.value = "";
        bookAuthor.value = "";
        bookPages.value = "";
    }
});


class Book {
    constructor(id, title, author, pages, readingStatus) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readingStatus = readingStatus;
    }
}

function addBookToLibrary() {

    let status = "";
    if (radioyes.checked) {
        status = "Read";
    } else {
        status = "Not Read";
    }

    /**create book object */

    const book = new Book(
        (id = Date.now()),
        title.value,
        author.value,
        pages.value,
        status
    );

    /**Push book to Library */
    myLibrary.push(book);
}

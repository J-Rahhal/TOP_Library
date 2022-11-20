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
let main = document.getElementById("shelf");

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
    /**Add books to page */
    addBooksTopage(myLibrary);
    /**Close add Book Form */
    divForm.classList.remove('popUp');
}

function addBooksTopage(myLibrary) {
    main.innerHTML = "";
    myLibrary.forEach((book) => {
        /**create  elements */
        let bookDiv = document.createElement("div");
        let bookTitleDiv = document.createElement("div");
        let bookTitleh3 = document.createElement("h3");
        let bookAuthorDiv = document.createElement("div");
        let bookAuthorh3 = document.createElement("h3");
        let bookPagesDiv = document.createElement("div");
        let bookPagesh3 = document.createElement("h3");
        let statusDiv = document.createElement("div");
        let statusButton = document.createElement("button");
        let deleteDiv = document.createElement("div");
        let deleteButton = document.createElement("button");

        bookDiv.setAttribute("data-id", book.id);
        /**add classes to divs */
        bookDiv.className =
            "book flex flex-col justify-center items-center gap-8 text-black border-8 border-eerieBlack mt-8 rounded-xl p-4 h-fit";
        bookTitleDiv.className = "book-title m-8 mb-0 w-fit";
        bookTitleh3.className = "text-md font-bold md:text-center";
        bookAuthorDiv.className = "book-author";
        bookAuthorh3.className = "font-bold";
        bookPagesDiv.className = "book-pages";
        bookPagesh3.className = "font-bold";
        statusDiv.className = "bstatus w-full text-eerieBlack";
        statusButton.className =
            "button-status bg-almostAqua px-4 py-2 rounded-full w-full hover:bg-gray-400";
        deleteDiv.className = "bdelete mb-4 w-full text-brightGray";
        deleteButton.className =
            "delete-button bg-red-700 px-4 py-2 rounded-full w-full  md:px-4 md:py-2";

        /**Text in h3 book title */
        titleText = document.createTextNode(book.title);
        authorText = document.createTextNode(book.author);
        pagesText = document.createTextNode(book.pages);

        /**add Text Nodes to parent elements */
        bookTitleh3.appendChild(titleText);
        bookAuthorh3.appendChild(authorText);
        bookPagesh3.appendChild(pagesText);
        statusButton.innerHTML = book.readingStatus;
        deleteButton.innerHTML = "Delete";

        /**add children nodes to parent nodes */
        bookTitleDiv.appendChild(bookTitleh3);
        bookAuthorDiv.appendChild(bookAuthorh3);
        bookPagesDiv.appendChild(bookPagesh3);
        statusDiv.appendChild(statusButton);
        deleteDiv.appendChild(deleteButton);

        bookDiv.appendChild(bookTitleDiv);
        bookDiv.appendChild(bookAuthorDiv);
        bookDiv.appendChild(bookPagesDiv);
        bookDiv.appendChild(statusDiv);
        bookDiv.appendChild(deleteDiv);

        /**add bookDiv to main */
        main.appendChild(bookDiv);
    });
}

main.addEventListener("click", () => {
    let deleteButton = document.getElementsByClassName("delete-button");
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", () => {
            let bookDiv = document.querySelectorAll("[data-id]");
            for (let j = 0; j < bookDiv.length; j++) {
                bookDiv[j].style.display = "none";
                deleteBook(bookDiv[j]);
            }
        });
    }
    updateStatus();
});






function deleteBook(bookId) {
    myLibrary = myLibrary.filter((book) => book.id === bookId);
}

function updateStatus() {
    myLibrary.forEach((item) => {
        let statusButton = document.getElementsByClassName("button-status");
        for (let i = 0; i < statusButton.length; i++) {
            statusButton[i].addEventListener("click", () => {
                if (statusButton[i].innerText === "Read") {
                    statusButton[i].innerText = "Not Read";
                    item.readStatus = statusButton[i].innerHTML;
                } else {
                    statusButton[i].innerText = "Read";
                    item.readStatus = statusButton[i].innerHTML;
                }
            });
        }
    });
}

/**
 * Variables
 */
 const addbutton = document.getElementById("add-button");
 const formContainer = document.getElementById("form-container");
 const submitButton = document.getElementById('submit-button');
 const closeButton = document.getElementById('close-button');
 const shelf = document.getElementById('shelf');

 /**
  * Get values of input fields
  */

 const bookTitle = document.getElementById('book-title');
 const bookAuthor = document.getElementById('book-author');
 const bookPages = document.getElementById('book-pages');
 const bookStatus = document.getElementById('book-status');

 /**
  * add event listeners for buttons
  */
 addbutton.addEventListener('click', popUp);
 closeButton.addEventListener('click', closePopUp);
 submitButton.addEventListener('click', addBook);

 /**
  * Store books Objects in myLibrary array
  */
 let myLibrary = [];

 /**
  * Book Constructor
  */

 function Book (title, author,pages, status) {
     this.title = title;
     this.author = author;
     this.pages = pages;
     this.status= status;
 }


 /**
  * Create book object
  */
 function addBook() {

 }

 /**
  * display popUp form to add book object
  */
 function popUp () {
     formContainer.style.display = 'block';
 }

/**
 * close add book popUp
 */
 function closePopUp() {
     formContainer.style.display = 'none';
 }

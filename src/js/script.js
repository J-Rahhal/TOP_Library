/**
 * Variables
 */
 const addbutton = document.getElementById("add-button");
 const formContainer = document.getElementById("form-container");
 const submitButton = document.getElementById('submit-button');
 const closeButton = document.getElementById('close-button');

 addbutton.addEventListener('click', popUp);

 /**
  * display popUp form to add book object
  */

 function popUp () {
     formContainer.style.display = 'block';
 }

 /*close add book popUp*/
 closeButton.addEventListener('click', closePopUp);

 function closePopUp() {
     formContainer.style.display = 'none';
 }

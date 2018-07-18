// global variables 

var inputTitle = document.querySelector('.input-title');
var inputBody = document.querySelector('.input-body');
var saveButton = document.querySelector('.save-button');
var searchInput = document.querySelector('.search');
var cardsLiveHere = document.querySelector('.cards-live-here');
var ideasArray = JSON.parse(localStorage.getItem('ideasArray')) || [];
var deleteButton = document.querySelector('.delete-button');
// var upButton = document.querySelector('up-button');
// var downButton = document.querySelector('down-button');

// event listeners

saveButton.addEventListener('click', saveIdea);
// // deleteButton.addEventListener('click', deleteIdea);
// upButton.addEventListener('click', changeQuality);
// downButton.addEventListener('click', changeQuality);

// constructor functions

function Idea(id, title, body) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = 'swill';
}

// functions

function clearInputs() {
  inputTitle.value = '';
  inputBody.value = '';
};

// will  need a function that
// clears search box and restores all ideas
// to the list. 
// function clearSearch() {
//   searchInput.value = '';
// };

// will need function that deletes idea upon event happening
// page should not reload when idea is deleted
// idea should also be removed from local storage
// function deleteIdea() {

// };

// will need function that changes quality, update HTML for interaction
// button should change qulity when button is pressed, it should also
// change quality in the array according to user input, maybe consider
// if/or as way to do this, will likely need event listeners on arrows
// function changeQuality() {

// }

function saveIdea(event) {
  event.preventDefault();
  var title = inputTitle.value;
  var body = inputBody.value;
  var newLi = document.createElement('li');
  var newIdea = new Idea(Date.now(), title, body);
  ideasArray.push(newIdea);
  localStorage.setItem('ideasArray', JSON.stringify(ideasArray));
  newLi.innerHTML = `<div class="title-line-parent-container">
        <h3>${title}</h3>
        <button class="delete-X">X</button>
      </div>
      <p class="idea-body">${body}</p>
      <div class="quality-line-parent-container">
        <button class="up-button">Up Arrow</button>
        <button class="down-button">Down Arrow</button>
        <p class="idea-quality">Quality</p>
        <br>
      </div>`
  cardsLiveHere.prepend(newLi);
  clearInputs();
};

// will eventually need a function that searches
// ideas to filter and display ideas whose title
// or body include the user's text... page should
// not reload


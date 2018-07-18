// global variables 

var inputTitle = document.querySelector('.input-title');
var inputBody = document.querySelector('.input-body');
var saveButton = document.querySelector('.save-button');
var searchInput = document.querySelector('.search');
var cardsLiveHere = document.querySelector('.cards-live-here');
var ideasArray = JSON.parse(localStorage.getItem('ideasArray')) || [];

// event listeners

saveButton.addEventListener('click', saveIdea);

// constructor functions

function Idea(id, title, body) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = 'swill';
}

// functions

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


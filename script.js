var inputTitle = document.querySelector('.input-title');
var inputBody = document.querySelector('.input-body');
var saveButton = document.querySelector('.save-button');
var searchInput = document.querySelector('.search');
var cardsLiveHere = document.querySelector('.cards-live-here');


saveButton.addEventListener('click', function(event){
  event.preventDefault()
  var title = inputTitle.value;
  var body = inputBody.value;
  var newLi = document.createElement('li');
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

   



});
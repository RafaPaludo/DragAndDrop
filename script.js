function _(msg){
  console.log(msg)
}

// Basic
// Get card and dropzone element
let dragzone = document.body;
let cards = document.querySelectorAll('.card');

// Variables to translate card
let initialTranslate = {
  'x': 0,
  'y': 0
};

let currentTranslate = {
  'x': 0,
  'y': 0
};

let finalTranslate = {
  'x': 0,
  'y': 0
};

cards.forEach( card => {
  card.addEventListener('mousedown', grabCard);
  card.addEventListener('mouseup', leaveCard);
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

// Card events
function grabCard() {
  this.classList.add('dragging');
  this.style.cursor = "move"
};

function leaveCard() {
  this.classList.remove('dragging');
  this.style.cursor = "default"
};

function dragStart(e) {
  initialTranslate = {
    'x': e.clientX - finalTranslate.x,
    'y': e.clientY - finalTranslate.y
  }

  // Using a empty image to don't display ghost preview
  var img = new Image();
  img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
  e.dataTransfer.setDragImage(img, 0, 0);
};

function dragEnd() {
  this.classList.remove('dragging');
  this.style.cursor = "default"
};

// Dragzone events
dragzone.addEventListener('dragover', dragOver);
dragzone.addEventListener('drop', drop);

function dragOver(e) {
  e.preventDefault();
  let dragElement = document.querySelector('.dragging');

  finalTranslate.x = currentTranslate['x'] = e.clientX - initialTranslate.x;
  finalTranslate.y = currentTranslate['y'] = e.clientY - initialTranslate.y;

  setTransform(finalTranslate.x, finalTranslate.y, dragElement);
};

function drop(e) {
  e.preventDefault();
  initialTranslate.x = finalTranslate.x;
  initialTranslate.y = finalTranslate.y;
};


// Utils functions
function setTransform(x, y, element) {
  element.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
}
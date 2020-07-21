var numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);

const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
var easyButton = document.querySelector('#easyButton');
var hardButton = document.querySelector('#hardButton');

easyButton.addEventListener('click', function () {
  hardButton.classList.remove('selected');
  easyButton.classList.add('selected');
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = '#232323';
});

hardButton.addEventListener('click', function () {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }
  h1.style.backgroundColor = '#232323';
});
resetButton.addEventListener('click', function () {
  //generat new colors
  colors = generateRandomColors(numberOfSquares);
  //pick a new random color
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = 'New Colors';
  messageDisplay.textContent = '';
  //change color of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = '#232323';
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listner to squares
  squares[i].addEventListener('click', function () {
    //grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'correct!';
      resetButton.textContent = 'Play Again';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}
function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(number) {
  //make an array
  const array = [];
  //repeat number of times
  for (var i = 0; i < number; i++) {
    //get random color and push it into array
    array.push(randomColor());
  }
  return array;
}
function randomColor() {
  //pick a "red" from 0 - 255
  const red = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  const green = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  const blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

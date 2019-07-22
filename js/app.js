'use strict';


var imageOneEl = document.getElementById('image-one');
var imageTwoEl = document.getElementById('image-two');
var imageThreeEl = document.getElementById('image-three');
var imageBoxEl = document.getElementById('image-box');
var imageNameList = ['banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var allImages = [];

function NewImage(name) {
  this.name = name.split('.')[0];
  this.filepath = `img/${name}`;
  this.viewCount = 0;
  this.voteCount = 0;

  allImages.push(this);
}

// loops through image names and creates new instances of NewImage for each one
for (var i = 0; i < imageNameList.length; i++) {
  new NewImage(imageNameList[i]);
}

// helper functions

var recentRandomNumbers = [];
function getRandomIndex() {
  var randomIndex = getRandomNumber(0, allImages.length - 1);

  while (recentRandomNumbers.includes(randomIndex)) {
    randomIndex = getRandomNumber(0, allImages.length - 1);
  }
  if (recentRandomNumbers.length > 5)
}


function getRandomNumber() {
  return Math.floor(Math.random) * (max - min + 1) + min;
}

function render() {
  imageOneEl.src = allImages[0].filepath;
  imageOneEl.alt = allImages[0].name;
  imageOneEl.title = allImages[0].title;
  console.log('names', allImages[0].name);

}

render();

console.log(allImages);

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


var recentRandomNumbers = [];
function getRandomIndex() {
  var randomIndex = getRandomNumber(0, allImages.length - 1);
  console.log('my random index is', randomIndex);
  while (recentRandomNumbers.includes(randomIndex)) {
    randomIndex = getRandomNumber(0, allImages.length - 1);
  }
  console.log('after the while loop random index is', randomIndex);
  if (recentRandomNumbers.length > 5) {
    recentRandomNumbers.shift(); // may need to adjust number on this
  }
  recentRandomNumbers.push(randomIndex);
  console.log(randomIndex);
  console.log(randomIndex);
  return randomIndex;
}


// helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render() {
  var pictureIndex = getRandomIndex();
  imageOneEl.src = allImages[pictureIndex].filepath;
  imageOneEl.alt = allImages[pictureIndex].name;
  imageOneEl.title = allImages[pictureIndex].name;

  pictureIndex = getRandomIndex();
  imageTwoEl.src = allImages[pictureIndex].filepath;
  imageTwoEl.alt = allImages[pictureIndex].name;
  imageTwoEl.title = allImages[pictureIndex].name;
  pictureIndex = getRandomIndex();
  imageThreeEl.src = allImages[pictureIndex].filepath;
  imageThreeEl.alt = allImages[pictureIndex].name;
  imageThreeEl.title = allImages[pictureIndex].name;
}

render();

console.log(allImages);

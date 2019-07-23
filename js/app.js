'use strict';


var imageOneEl = document.getElementById('image-one');
var imageTwoEl = document.getElementById('image-two');
var imageThreeEl = document.getElementById('image-three');

var imageBoxEl = document.getElementById('image-box');

var imageNameList = ['banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var ulEl = document.getElementById('vote-list');

var allImages = [];
var clickCount = 0;

function NewImage(filename) {
  this.name = filename.split('.')[0];
  this.filepath = `img/${filename}`;
  this.viewCount = 0;
  this.voteCount = 0;

  allImages.push(this);
}

// loops through image names and creates new instances of NewImage for each one
for (var i = 0; i < imageNameList.length; i++) {
  new NewImage(imageNameList[i]);
}

// helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var recentRandomIndexes = [];
function getRandomIndex() {
  var randomIndex = getRandomNumber(0, allImages.length - 1);

  while (recentRandomIndexes.includes(randomIndex)) {
    randomIndex = getRandomNumber(0, allImages.length - 1);
  }

  if (recentRandomIndexes.length > 5) {
    recentRandomIndexes.shift();
  }
  recentRandomIndexes.push(randomIndex);
  //console.log(randomIndex);

  return randomIndex;
}




function handleClick() {
  var chosenImage = event.target.title;
  console.log('event.target.title is', event.target.title); // WORKING ON THIS
  for (var i = 0; i < allImages.length; i++) {
    console.log('I am looping i handleClick: ' + i);
    console.log('I am about to compare these:', allImages[i], chosenImage);
    if (allImages[i].name === chosenImage) {
      console.log('I am going to give this one a vote: ' + chosenImage);
      allImages[i].voteCount++;
    }
  }
  clickCount++;
  console.log('clickCount is', clickCount);
  if (clickCount < 25) {
    render();
  } else {
    imageBoxEl.removeEventListener('click', handleClick);
    renderVoteCount();
  }
}

// CREATE HELPER FUNCTION
function render() {
  var pictureIndex = getRandomIndex();
  allImages[pictureIndex].viewCount++;
  imageOneEl.src = allImages[pictureIndex].filepath;
  imageOneEl.alt = allImages[pictureIndex].name;
  imageOneEl.title = allImages[pictureIndex].name;

  pictureIndex = getRandomIndex();
  allImages[pictureIndex].viewCount++;
  imageTwoEl.src = allImages[pictureIndex].filepath;
  imageTwoEl.alt = allImages[pictureIndex].name;
  imageTwoEl.title = allImages[pictureIndex].name;

  pictureIndex = getRandomIndex();
  allImages[pictureIndex].viewCount++;
  imageThreeEl.src = allImages[pictureIndex].filepath;
  imageThreeEl.alt = allImages[pictureIndex].name;
  imageThreeEl.title = allImages[pictureIndex].name;
}

function renderVoteCount() {
  for (var i = 0; i < allImages.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${allImages[i].voteCount} votes for ${allImages[i].name}`;
    ulEl.appendChild(liEl);
  }
}

imageBoxEl.addEventListener('click', handleClick);

render();

console.log(allImages);

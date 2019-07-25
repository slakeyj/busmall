'use strict';

var imageOneEl = document.getElementById('image-one');
var imageTwoEl = document.getElementById('image-two');
var imageThreeEl = document.getElementById('image-three');
var buttonEl = document.getElementById('clear-button');
var radioOneEl = document.getElementById('radio-one');
var radioTwoEl = document.getElementById('radio-two');
var radioThreeEl = document.getElementById('radio-three');
var voteButtonEl = document.getElementById('vote-button');
var selectedImage = undefined;

var allImages = [];
var clickCount = 0;

var imageFileNameList = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function NewImage(filename) {
  this.name = filename.split('.')[0];
  this.filepath = `img/${filename}`;
  this.viewCount = 0;
  this.voteCount = 0;

  allImages.push(this);
}

if (localStorage.length === 0) {
  for (var i = 0; i < imageFileNameList.length; i++) {
    new NewImage(imageFileNameList[i]);
  }
} else {
  getLocalStorage();
}

// LOCAL STORAGE
function getLocalStorage() {
  var getLocalStorage = localStorage.getItem('images');
  var parsedLocalStorage = JSON.parse(getLocalStorage);
  allImages = parsedLocalStorage;
}

function setLocalStorage() {
  var stringifiedData = JSON.stringify(allImages);
  localStorage.setItem('images', stringifiedData);

}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var recentRandomIndexes = [];
// comment
function getRandomIndex() {
  var randomIndex = getRandomNumber(0, allImages.length - 1);
  while (recentRandomIndexes.includes(randomIndex)) {
    randomIndex = getRandomNumber(0, allImages.length - 1);
  }
  if (recentRandomIndexes.length > 5) {
    recentRandomIndexes.shift();
    //console.log(recentRandomIndexes);
  }
  recentRandomIndexes.push(randomIndex);
  //console.log(randomIndex);
  return randomIndex;
}

var imageNamesArray = [];
var voteCountList = [];

function generateArrays() {
  for (var j = 0; j < allImages.length; j++) {
    imageNamesArray.push(allImages[j].name);
    voteCountList.push(allImages[j].voteCount);
  }
}

function generateVotePercentage() {
  var imageVotePercentageList = [];
  for (var i = 0; i < allImages.length; i++) {
    var percentages = Math.round((allImages[i].voteCount / allImages[i].viewCount) * 100);
    imageVotePercentageList.push(percentages);
  }
  return imageVotePercentageList;
}

// CHARTS
function generateChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: imageNamesArray,
      datasets: [{
        label: '# of Votes',
        data: voteCountList,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function generatePieChart() {
  var ctx = document.getElementById('myPie').getContext('2d');
  new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
      labels: imageNamesArray,
      datasets: [{
        label: 'Votes per View',
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)'
        ],
        borderWidth: 1,
        borderColor: 'rgba(38, 12, 12, 0.54)',
        data: generateVotePercentage()
      }]
    },

    // Configuration options go here
    options: {}
  });
}

// EVENT HANDLERS
function handleRadioClick() {
  var chosenImage = event.target.parentElement.id;
  // console.log('event.target.parentElement.id ', chosenImage);
  //console.log('event.target is ', event.target);
  selectedImage = chosenImage;
  console.log('selected image in handleRadioClick ', selectedImage);
}

function handleVote() {
  console.log('selected image is ', selectedImage);
  if (selectedImage === undefined) {
    return;
  }
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i].name === selectedImage) {
      allImages[i].voteCount++;
      console.log(`vote for ${allImages[i].name} is `, allImages[i].voteCount);
    }
  }
  clickCount++;
  //console.log('clickCount is', clickCount);
  if (clickCount < 25) {
    renderAllImages();
    radioOneEl.checked = false;
    radioTwoEl.checked = false;
    radioThreeEl.checked = false;
    selectedImage = undefined;
  } else {
    radioOneEl.removeEventListener('click', handleRadioClick);
    radioTwoEl.removeEventListener('click', handleRadioClick);
    radioThreeEl.removeEventListener('click', handleRadioClick);
    voteButtonEl.removeEventListener('click', handleVote);

    generateArrays();
    generateChart();
    generatePieChart();
    setLocalStorage();
  }
}

// location.reload() found at https://www.w3schools.com/jsref/met_loc_reload.asp
function handleButtonClick() {
  localStorage.clear();
  location.reload();
}

// RENDER FUNCTIONS
function renderImage(imageElement) {
  var pictureIndex = getRandomIndex();
  allImages[pictureIndex].viewCount++;
  var name = allImages[pictureIndex].name;
  //console.log(`view count of ${name} is `, allImages[pictureIndex].viewCount);
  imageElement.src = allImages[pictureIndex].filepath;
  imageElement.alt = name;
  imageElement.title = name;
  var divElement = imageElement.closest('.image-choice');
  divElement.id = name;
}

function renderAllImages() {
  renderImage(imageOneEl);
  renderImage(imageTwoEl);
  renderImage(imageThreeEl);
}

// EVENT LISTENERS
radioOneEl.addEventListener('click', handleRadioClick);
radioTwoEl.addEventListener('click', handleRadioClick);
radioThreeEl.addEventListener('click', handleRadioClick);
buttonEl.addEventListener('click', handleButtonClick);
voteButtonEl.addEventListener('click', handleVote);

renderAllImages();





const container = document.getElementById("container");
let inputSize = 16;
let userColor = 'blue';
let toggleBorder = 1;
var item;

function makeBlocks(size) {
  for (var i = 0; i < size * size; i++) {
    var box = document.createElement('div');
    box.className = "box1";
    document.getElementById('container').appendChild(box);
  }
  addListener();
}
makeBlocks(inputSize);

function addListener() {
  item = document.getElementsByClassName("box1");

  let i = 0;
  for(i = 0; i < inputSize*inputSize; i++) {

    try{throw i}

    catch(thisObject) {

      item[thisObject].addEventListener("mouseover", function() {
        func(item[thisObject]);
      });
    }


  }
}

function func(thisElement) {
  thisElement.style.backgroundColor = userColor;
}


function func1(help) {
  help.style.backgroundColor = 'blue';
}

function myFunction(buttonColor) {
  let elem = document.getElementById(buttonColor)
  userColor =  getComputedStyle(elem, null).getPropertyValue("background-color");
}
function resetButton() {
  for(i = 0; i < item.length; i++) {
    item[i].style.backgroundColor = 'white';
  } 
}

function toggleButton() {
  if(!toggleBorder){
    for(i = 0; i < item.length; i++) {
      item[i].style.outline = '1px solid black';
    }
    toggleBorder = 1;
    return;
  }
  else{
    for(i=0; i < item.length; i++) {
      item[i].style.outline = 'transparent';
    }
    toggleBorder = 0;
    return;
  }
}

function userPrompt() {
  inputSize = Math.floor(prompt("Enter the size of grid you want", "E.g. 16"));
  while(isNaN(inputSize) || inputSize < 1 || inputSize > 64) {
    inputSize = Math.floor(prompt("Invalid input. Enter only numbers between the values of 0-64"));
  }
  document.documentElement.style.setProperty('--main-dimension', inputSize);
  while(item[0]) {
    item[0].parentNode.removeChild(item[0]);
  }
  makeBlocks(inputSize);
  resetButton();
  item = document.getElementsByClassName("box1");
}



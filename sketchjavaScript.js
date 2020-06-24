const container = document.getElementById("container");
let inputSize = 16;
let userColor = 'blue';

function makeBlocks(size) {
  for (var i = 0; i < size * size; i++) {
    var box = document.createElement('div');
    box.className = "box1";
    /*box.textContent = i+1;*/
    document.getElementById('container').appendChild(box);
  }
}
makeBlocks(inputSize);

container.addEventListener("mouseover", func(container), false)



var item = document.getElementsByClassName("box1");

let i = 0;
for(i = 0; i < inputSize*inputSize; i++) {

  try{throw i}

  catch(thisObject) {

    item[thisObject].addEventListener("mouseover", function() {
      func(item[thisObject]);
    });
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








const container = document.getElementById("container");
   
   function makeBlocks(size) {
     for (var i = 0; i < size * size; i++) {
       var box = document.createElement('div');
       box.className = "box1";
       box.textContent = i+1;
       document.getElementById('container').appendChild(box);
     }
  }
  makeBlocks(16);
  
  container.addEventListener("mouseover", func(container), false)
  
  
  
  var item = document.getElementsByClassName("box1");
  
  let i = 0;
  for(i = 0; i < 256; i++) {
  
    try{throw i}
  
    catch(thisObject) {
  
      item[thisObject].addEventListener("mouseover", function() {
        func(item[thisObject]);
      });
    }
  
  
  }
  
  function func(thisElement) {
    thisElement.style.backgroundColor = 'blue';
  }
  
  
  function func1(help) {
    help.style.backgroundColor = 'blue';
  }


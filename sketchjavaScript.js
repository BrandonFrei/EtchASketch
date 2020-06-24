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


for(var i = 0; i < 256; i++) {

  var thisObject = item[i];
  thisObject.addEventListener("mouseover", function(){
  func(thisObject)
  });
}

/*
item[1].addEventListener("mouseover", function(){
   func(item[1])
});


item[0].addEventListener("mouseover", function(){
   func(item[0])
});
*/
function func(thisElement) {
  thisElement.style.backgroundColor = 'blue';
}


/*
for (var i = 0; i < 256; i++) {
 console.log(item[i]); 
item[i].addEventListener("mouseover", function(){
   func(item[i])
});
}
*/
/*  item[i].addEventListener("mouseover", function(){ func(item[i]) });
  item[i].addEventListener("mouseout", function(){ func1(item[i]) });
*/

/*
function func(help) {
  help.style.backgroundColor = 'blue';
}
*/
function func1(help) {  
  help.style.backgroundColor = 'blue';
}


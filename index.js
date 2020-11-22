
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handelClick);
}

function handelClick() 
{
  var btnInnerHTML = this.innerHTML;
  makeSound(btnInnerHTML.toLowerCase());
  btnAnimation(btnInnerHTML.toLowerCase());
}


document.addEventListener("keypress", handelKey);


function handelKey()
{
  makeSound(event.key);
  btnAnimation(event.key);
}


function makeSound(key)
{
  switch(key)
  {
    case"a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case"s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case"d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case"j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case"k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case"w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case"l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default: console.log(btnInnerHTML);
  }
}


function btnAnimation(curentKye)
{
  var btnActive = document.querySelector("." + curentKye);
  btnActive.classList.add("pressed");

  setTimeout(function()
  {
    btnActive.classList.remove("pressed");
  }, 100);
}

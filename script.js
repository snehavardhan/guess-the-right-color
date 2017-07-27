var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
  //mode buttons event listeners
  for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
      //figure out how many squares to show
      //pick new colors
      //pick new pickedColor
      //update page to reflest changes
    });
  }
  for (var i = 0; i<squares.length; i++){
    //add click listeners
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.background;
      if(clickedColor === pickedColor){
          messageDisplay.textContent = "Correct!!";
          resetButton.textContent = "Play Again!"
          changeColors(clickedColor);
          h1.style.background = clickedColor;
      }
      else{
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!!";
      }
    });
  }
  reset();
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick a random color form the array
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for(var i =0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i< squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else{
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i< squares.length; i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//   }
//
// });

resetButton.addEventListener("click", function(){
  reset();
  // //generate all new colors
  // colors = generateRandomColors(numSquares);
  // //pick a random color form the array
  // pickedColor = pickColor();
  // //change color display to match picked color
  // colorDisplay.textContent = pickedColor;
  // this.textContent = "New Colors";
  // messageDisplay.textContent = "";
  // for(var i =0; i<squares.length; i++){
  //   squares[i].style.background = colors[i];
  // }
  // h1.style.background = "steelblue";

})

for (var i = 0; i<squares.length; i++){
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!!";
        resetButton.textContent = "Play Again!"
        changeColors(clickedColor);
        h1.style.background = clickedColor;

    }
    else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again!!";
    }
  });
}

function changeColors(color){
  for(var i=0; i<squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var randomArray = [];
  for(var i=0; i< num; i++){
    randomArray.push(randomColor());
  }
  return randomArray;
}

function randomColor(){
  //pick a red, green and blue from 0-255
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb("+ r +", " + g + ", " + b + ")";
}

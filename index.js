

const defaultContainer = document.getElementById("default-container");

const userContainer = document.createElement("div");
userContainer.id = "user-container";

const clear = document.querySelector("#clear");

const noOfBoxes = document.querySelector("#box-numbers");

const randomColor = document.querySelector("#random-color");

// RANDOM COLOR GENERATOR (set the randomMode to true)
let randomMode = false;

randomColor.addEventListener("click",()=>{
  randomMode = !randomMode;
  randomColor.textContent = randomMode ? "Random Color ON": "Random Color OFF";
});

// RANDOM COLOR GENERATOR (creating a function)
function randomColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// FUCNTION TO CREATE GRID

let currentSize = 16;

function createGrid(size){
  size = Number(size);  
    defaultContainer.innerHTML = "";

  defaultContainer.style.gridTemplateColumns =
  `repeat(${size}, 1fr)`;
  defaultContainer.style.gridTemplateRows =
  `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box")
    defaultContainer.appendChild(box);
  }
}
createGrid(currentSize);


//COLOR THE BOARD
defaultContainer.addEventListener("mouseover", (e) => {
  if(!e.target.classList.contains("box")) return;

      if(randomMode) {
        e.target.style.backgroundColor = randomColorGenerator();
      }else {
          e.target.style.backgroundColor = "white";
       } 
    });

//CLEAR THE BOARD
clear.addEventListener("click",()=>{
  createGrid(currentSize)
})

//USER GIVING SIZE OF THE BOARD
noOfBoxes.addEventListener("click",()=>{
  let number = Number(prompt("create the board size between 1 and 100"))
  currentSize = number;
  createGrid(currentSize);
})

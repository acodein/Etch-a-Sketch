const defaultContainer = document.getElementById("default-container");

const userContainer = document.createElement("div");
userContainer.id = "user-container";

const clear = document.querySelector("#clear");

const noOfBoxes = document.querySelector("#box-numbers");

const randomColor = document.querySelector("#random-color");

// DEFAULT GRID
for (let i = 0; i < 16 * 16; i++) {
  const defaultBoxes = document.createElement("div");
  defaultBoxes.classList.add("box");
  defaultContainer.appendChild(defaultBoxes);

  defaultBoxes.addEventListener("mouseover", () => {
    defaultBoxes.classList.add("hovered");
  });

  randomColor.addEventListener("click", () => {
    defaultBoxes.addEventListener("mouseover", () => {
      defaultBoxes.style.backgroundColor = randomColorGenerator();
    });
  });
  clear.addEventListener("click", () => {
    defaultBoxes.classList.remove("hovered");
    defaultBoxes.style.backgroundColor = "";
  });
}

// when the user presses Box Numbers for
//    user required grids from 1 to 100.
noOfBoxes.addEventListener("click", () => {
  let number = prompt("Enter the number b/w 1 to 100: ");

  defaultContainer.innerHTML = "";

  for (let i = 0; i < number * number; i++) {
    const defaultBoxes = document.createElement("div");

    defaultBoxes.classList.add("box");

    defaultContainer.appendChild(defaultBoxes);

    defaultBoxes.addEventListener("mouseover", () => {
      defaultBoxes.classList.add("hovered");
    });
    randomColor.addEventListener("click", () => {
      defaultBoxes.addEventListener("mouseover", () => {
        defaultBoxes.style.backgroundColor = randomColorGenerator();
      });
    });
    clear.addEventListener("click", () => {
      defaultBoxes.classList.remove("hovered");
      defaultBoxes.style.backgroundColor = "";
    });
  }
});

function randomColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

randomColor.addEventListener("click", () => {
  defaultBoxes.style.backgroundColor = randomColorGenerator();
});

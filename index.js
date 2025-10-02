const defaultContainer = document.getElementById("default-container");

const userContainer = document.createElement("div");
userContainer.id = "user-container";

let userBoxes;

let number = 16;
const clear = document.querySelector("#clear");

const noOfBoxes = document.querySelector("#box-numbers");

for (let i = 0; i < 16 * 16; i++) {
  const defaultBoxes = document.createElement("div");
  defaultBoxes.classList.add("box");
  defaultContainer.appendChild(defaultBoxes);

  defaultBoxes.addEventListener("mouseover", () => {
    defaultBoxes.classList.add("hovered");
  });
  clear.addEventListener("click", () => {
    defaultBoxes.classList.remove("hovered");
  });
}

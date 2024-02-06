// Global
let gridSize = 32;
let color = "#000000";
let selected = "Pen";
// Add grid squares to page
function initializeGrid() {
  grid.innerHTML = "";
  let frag = new DocumentFragment();
  for (i = 0; i < gridSize ** 2; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-square");
    div.style.width = 480 / gridSize + "px";
    div.style.height = 480 / gridSize + "px";
    frag.append(div);
  }
  grid.append(frag);
}
initializeGrid();

// Color grid square
grid.addEventListener("mouseover", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("grid-square")) return;

  if (event.buttons !== 1) return;

  if (selected == "Pen") event.target.style.backgroundColor = color;
  else event.target.style.backgroundColor = "transparent";
});

// Prevent mouse dragging colored divs
grid.addEventListener("mousedown", (event) => {
  if (!event.target.classList.contains("grid-square")) return;
  event.preventDefault();
});

// Change color
colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", (event) => {
  color = event.target.value;
});

// Clear grid
function clearGrid() {
  let gridSquareList = grid.children;
  for (gridSquare of gridSquareList) {
    gridSquare.style.backgroundColor = "transparent";
  }
}

clear.addEventListener("click", clearGrid);

// Resize grid
size.addEventListener("change", (event) => {
  gridSize = event.target.value;
  initializeGrid();
});

// Toggle selection between pen and eraser
eraser.addEventListener('click', ()=>{
    selected = "Eraser";
});

pen.addEventListener('click', ()=>{
    selected = "Pen";
})
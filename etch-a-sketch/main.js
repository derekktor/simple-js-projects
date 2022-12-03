// Variables
const gridSize = document.querySelector("form input");
const submitBtn = document.querySelector("form button");
var grid = document.querySelector(".grid");

const changeGridSize = (e) => {
    e.preventDefault();

    // remove grid element
    document.querySelector(".grid").remove();

    // create grid children
    let grid = document.createElement("div");

    grid.classList.add("grid");
    for (let i = 0; i < Math.pow(gridSize.value, 2); i++) {
        let newDiv = document.createElement("div");
        newDiv.style.width = `${400 / gridSize.value}px`;
        newDiv.style.height = `${400 / gridSize.value}px`;
        grid.appendChild(newDiv);
    }

    // set grid style
    grid.style.gridTemplateRows = `repeat(${gridSize.value}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;

    console.log(grid);

    document.querySelector(".container").appendChild(grid);
};

// Event Listeners
gridSize.addEventListener("input", changeGridSize);
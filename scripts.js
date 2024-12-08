function createSquare(size) {
    const square = document.createElement("div");
    square.style.width = size + "px";
    square.style.height = size + "px";;
    square.style.backgroundColor = "blue";
    return square;
}

function cleanUp() {
    const container = document.querySelector(".container");
    const squares = document.querySelectorAll(".square");
    for (node of squares){
        container.removeChild(node);
    }
}

function startGrid(size) {
    let row = 0;
    let col = 0;
    let squareSize = 960 / size;
    const container = document.querySelector(".container");
    for (row; row < size; row++) {
        col = 0;
        for (col; col < size; col++) {
            const square = createSquare(squareSize);
            square.classList.add("square");
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "green";
            })
            container.appendChild(square);
        }
    }
}

function getUserInput() {
    let newSize = prompt("Enter the number of squares per side for the new grid.");
    if (newSize == null) {
        return;
    }
    while (newSize > 100) {
        if (newSize == null) {
            return;
        }
        newSize = prompt("The maximum is 100 squares. Please Enter a lower value.")
    }
    cleanUp();
    startGrid(newSize);
}

function addButton() {
    const button = document.querySelector("button");
    button.textContent = "Start a new grid!";
    button.addEventListener("click", () => getUserInput());
}

startGrid(16);
addButton();


let squareSize = 60;
let newSize = 0;

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
    squareSize = 960 / size;
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
    buttonCheck();
}

function buttonCheck() {
    console.log("buttoncheck");
    const button = document.querySelector("button");
    button.textContent = "Start a new grid!";
    button.addEventListener("click", () => {
        newSize = prompt("Enter the number of squares per side for the new grid.");
        while (newSize > 100) {
            newSize = prompt("The maximum is 100 squares. Please Enter a lower value.")
        }
        cleanUp();
        startGrid(newSize); }
    );
}

startGrid(16);



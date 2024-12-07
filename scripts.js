function createSquare(size) {
    const square = document.createElement("div");
    square.style.width = size + "px";
    square.style.height = size + "px";;
    square.style.margin = "1px";
    square.style.backgroundColor = "blue";
    return square;
}

let row = 0;
let col = 0;
const squareSize = 70;

const container = document.querySelector(".container");

for (row; row < 16; row++) {
    col = 0;
    for (col; col < 16; col++) {
        const square = createSquare(squareSize);
        container.appendChild(square);
    }
}
let grid;

function blankGrid() {
    return [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
}

function setup() {
    createCanvas(400, 400);
    noLoop();
    //console.table(grid);
    grid = blankGrid();
    // addNumber();
    // addNumber();
    updateCanvas();
}
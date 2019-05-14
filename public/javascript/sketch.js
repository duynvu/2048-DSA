let grid;
let score = 0;

function blankGrid() {
    return [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
}

function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
    grid = blankGrid();
}

function updateCanvas() {
    background(255);
    drawGrid();
    document.getElementById('score').innerHTML = score;
}

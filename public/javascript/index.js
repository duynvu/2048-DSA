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
    const canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
    grid = blankGrid();
}
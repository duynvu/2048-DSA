import swal from 'sweetalert';


let grid;
let score = 0;
let undoList = [];
let undoCheck = false;

function pushToList() {
    if (undoList.length > 0 && undoCheck === true) {
        undoCheck = false;
        undoList = [copyGrid(grid)];
    }
    undoList.push(copyGrid(grid));
}

function undo() {
    if (undoCheck === false) {
        undoCheck = true;
        undoList.pop();
    }
    if (undoList.length == 0) {
        return;
    }
    grid = undoList.pop();
    updateCanvas();
}

function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
    grid = blankGrid();
    noLoop();
    addNumber();
    addNumber();
    updateCanvas();
    pushToList();
}

function updateCanvas() {
    background(255);
    drawGrid();
    document.getElementById('score').innerHTML = score;
}

function operate(row) {
    row = slide(row);
    row = combine(row);
    row = slide(row);
    return row;
}

function keyPressed() {
    let flipped = false;
    let rotated = false;
    let played = true;

    if (keyCode === DOWN_ARROW) {
        //Do nothing
    } else if (keyCode === UP_ARROW) {
        grid = flipGrid(grid);
        flipped = true;
    } else if (keyCode === RIGHT_ARROW) {
        grid = rotateGrid(grid);
        rotated = true;
    } else if (keyCode === LEFT_ARROW) {
        grid = rotateGrid(grid);
        grid = flipGrid(grid);
        rotated = true;
        flipped = true;
    } else {
        played = false;
    }

    if (played) {
        let past = copyGrid(grid);
        for (let i = 0; i < 4; i++) {
            grid[i] = operate(grid[i]);
        }
        let changed = compare(past, grid);

        if (flipped) {
            grid = flipGrid(grid);
        }

        if (rotated) {
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
            grid = rotateGrid(grid);
        }

        if (changed) {
            addNumber();
            pushToList();

        }
        updateCanvas();

        let gameover = isGameOver();
        if (gameover) {
            console.log("game over")
        }

        let gamewon = isGameWon();
        if (gamewon) {
            swal("Well done!", "You have won this game!", "success");
        }
    }
}

function drawGrid() {
    background(220);
    let w = 100;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            // noFill();
            // strokeWeight(2);
            let val = grid[i][j];
            let s = val.toString();
            strokeWeight(15);
            stroke('#bbada0');
            if (val != 0) {
                // stroke(0);
                fill(colorsAndSizes[s].color);
            } else {
                // noFill();
                fill(colorsAndSizes[0].color);
            }

            rect(i * w, j * w, w, w);

            if (grid[i][j] !== 0) {
                textAlign(CENTER, CENTER);
                noStroke();
                fill(0);
                textSize(colorsAndSizes[s].size);
                text(val, i * w + w / 2, j * w + w / 2);
            }
        }
    }
}
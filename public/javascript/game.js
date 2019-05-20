function isGameWon() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if(grid[i][j] == 2048) {
                return true;
            }
        }
    } 
    return false;   
}
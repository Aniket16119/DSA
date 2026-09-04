var minPathSum = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            // Starting cell
            if (i === 0 && j === 0) {
                continue;
            }

            // First row
            if (i === 0) {
                grid[i][j] += grid[i][j - 1];
            }

            // First column
            else if (j === 0) {
                grid[i][j] += grid[i - 1][j];
            }

            // Every other cell
            else {
                grid[i][j] += Math.min(
                    grid[i - 1][j],
                    grid[i][j - 1]
                );
            }
        }
    }

    return grid[rows - 1][cols - 1];
};

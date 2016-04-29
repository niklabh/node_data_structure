/**
  *  Maze Solving Algorithm in javascript using backtracking
  */
  
const N = 4;

let maze = [[1, 0, 0, 0],
            [1, 1, 0, 1],
            [0, 1, 0, 0],
            [1, 1, 1, 1]];


const print = (sol) => {
	var row = [];
	sol.forEach((row) => {
		console.log(row.join(" "));
	});
};

const getSolMat = (n) => {
	let sol = [];
	for(var i = 0; i < n; i++) {
		sol.push([]);
		for(var j = 0; j < n; j++) {
			sol[i][j] = 0;
		}
	}
	return sol;
};


const valid = (maze, x, y) => ((x >= 0 && y >= 0 && x < N && y < N && maze[x][y]) ? true : false);

const solveMaze = (maze, x, y, sol) => {
	if (valid(maze, x, y) && x === N - 1 && y === N - 1) {
		sol[x][y] = 1;
		return true;
	}

	if (valid(maze, x, y)) {
		sol[x][y] = 1;

		if (solveMaze(maze, x + 1, y, sol)) return true;

		if (solveMaze(maze, x, y + 1, sol)) return true;

		sol[x][y] = 0;  //backtrack
		return false;
	}

	return false;
};

let sol = getSolMat(N);

if (solveMaze(maze, 0, 0, sol)) 
	print(sol);
else
	console.log("No solution exist");





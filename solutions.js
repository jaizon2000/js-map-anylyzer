// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;
let currentTile = document.getElementById('currentTile');

// Solution Functions...
function level1Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 4) {
		currentTile.innerHTML = "Sand"; // Set output text
	} else {
		currentTile.innerHTML = 'Water';
	}
}

function level2Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 2) {
		currentTile.innerHTML = 'Tree';
	} else if (column >= 3 && column <= 7) {
		currentTile.innerHTML = 'Sand';
	} else {
		currentTile.innerHTML = 'Water';
	}
}

function level3Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 2 || column >= 8) {
		currentTile.innerHTML = 'Hills';
	} else {
		currentTile.innerHTML = 'Sand';
	}
}

function level4Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 2) {
		currentTile.innerHTML = 'Hills';
	} else {
		currentTile.innerHTML = 'Sand';
	}
}

function level5Solution() {
	// USE CHAINED IF STATEMENT
	if (row <= 2) {
		currentTile.innerHTML = 'Hills';
	} else if (row <= 5) {
		currentTile.innerHTML = 'Sand';
	} else {
		currentTile.innerHTML = "Water";
	}
}

function level6Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 1 || row >= 6) {
		currentTile.innerHTML = 'Water';
	} else {
		currentTile.innerHTML = 'Sand';
	}
}

function level7Solution() {
	// USE BINARY IF STATEMENT
	if (column == 7 && row == 4) {
		currentTile.innerHTML = 'Water';
	} else {
		currentTile.innerHTML = 'Sand';
	}
}

function level8Solution() {
	// USE BINARY IF STATEMENT
	if (row == 5 || column == 2) {
		currentTile.innerHTML = 'Tree';
	} else {
		currentTile.innerHTML = 'Sand';
	}
}

function level9Solution() {
	// USE BINARY IF STATEMENT
	if (row <= 5 && column <= 5) {
		currentTile.innerHTML = 'Water';
	} else {
		currentTile.innerHTML = 'Sand';
	}

}

function level10Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 1) {
		currentTile.innerHTML = 'Hills';
	} else if (column == 2 || column == 3) {
		currentTile.innerHTML = 'Tree';
	} else if (column >= 8) {
		currentTile.innerHTML = 'Water';
	} else {
		currentTile.innerHTML = 'Sand';
	}

}

function level11Solution() {
	// USE CHAINED IF STATEMENT
	if (row <= 3 && column <= 5) {
		currentTile.innerHTML = 'Water';
	} else if (column >= 6 && row <= 3) {
		currentTile.innerHTML = 'Hills';
	} else if (row <= 4 && column <= 5) {
		currentTile.innerHTML = 'Sand';
	} else {
		currentTile.innerHTML = 'Tree';
	}

}

function level12Solution() {
	// USE BINARY IF STATEMENT
	if ((column <= 5 && row <= 4) || (column >= 6 && row >= 5)) {
		currentTile.innerHTML = 'Water';
	} else {
		currentTile.innerHTML = 'Sand';
	}

}

function level13Solution() {
	// USE BINARY IF STATEMENT
	if (column >= 4 && row >= 2 && column <= 9 && row <= 5) {
		currentTile.innerHTML = 'Sand';
	} else {
		currentTile.innerHTML = 'Tree';
	}

}

function level14Solution() {
	// USE CHAINED IF STATEMENT
	if (column >= 2 && column <= 4 && row >= 1 && row <= 5) {
		currentTile.innerHTML = 'Tree';
	} else if (row >= 3 && row <= 5 && column >= 7 && column <= 10) {
		currentTile.innerHTML = 'Water';
	} else {
		currentTile.innerHTML = 'Sand';
	}

}
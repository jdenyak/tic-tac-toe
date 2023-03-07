var c = document.getElementById('board');
var cells = [	c.rows[0].cells[0],	c.rows[1].cells[0],	c.rows[2].cells[0],

		c.rows[0].cells[1],	c.rows[1].cells[1],	c.rows[2].cells[1],
	
		c.rows[0].cells[2],	c.rows[1].cells[2],	c.rows[2].cells[2]]
var combinations = [
	  [0,1,2],
	  [3,4,5],
	  [6,7,8],
	  [0,3,6],
	  [1,4,7],
	  [2,5,8],
	  [0,4,8],
	  [2,4,6]
];

document.getElementById('res').style.display = 'none';

function reset() {
	for (let cell of cells) {
		cell.innerText = "";
		cell.style.backgroundColor = "white";
	}
	document.getElementById('res').style.display = 'none';
}

function checkWin(symbol) {
	  for (let combination of combinations) {
	      if (combination.every(index => cells[index].innerText === symbol)) {
	            return true;
	      }
	  }
	  return false;
}

function winwin (w) {	
	document.getElementById('res').innerText = w;
	document.getElementById('res').style.display = 'flex';
}



function random () {
	var freeCells = cells.filter(cell => cell.innerText !== "x" && cell.innerText !== "o");
	var randomCell = freeCells[Math.floor(Math.random() * freeCells.length)];
	randomCell.innerText = 'o';
}
document.getElementById('board').addEventListener("click", function(e) {
	if (e.target.id == 'board' || e.target.id == 'border') {
		return;
	} else {
		if (e.target.innerText != 'o' && e.target.innerText != 'x') {
			e.target.innerText = 'x';
			setTimeout(random(), 1000);
			if (checkWin('x')) {
			     winwin('you win');
			     return;
			}
			if (checkWin('o')) {
				winwin('you loose');
				return;
			}
		} else {
			return;
		}
	}
})
console.log(cells);

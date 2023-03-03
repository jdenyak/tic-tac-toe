var order = true;
var c = document.getElementById('board');
var cells = [	c.rows[0].cells[0],	c.rows[1].cells[0],	c.rows[2].cells[0],

		c.rows[0].cells[1],	c.rows[1].cells[1],	c.rows[2].cells[1],
	
		c.rows[0].cells[2],	c.rows[1].cells[2],	c.rows[2].cells[2]]

document.getElementById('res').style.display = 'none';

function gaPR() {

	//restart if every cell in busy
	var restart = true;
	for (var i = 0; i < cells.length; i++) {
		if (cells[i].innerHTML == '') {
			restart = false;
			break;
		}
	}

	if (restart) {
		document.getElementById('res').style.display = 'block';
		setTimeout(function(){
			location.reload();
		}, 2500);
	}

	//choosin' random cell
	rE = Math.floor(Math.random() * 9);
	console.log(rE) //debuggin'

	if (String(cells[rE].innerHTML) != '') {
		gaPR();
	} else {
		cells[rE].innerHTML = 'o';
	}
	order = true;
}

document.getElementById('board').addEventListener("click", function(e) {
	if (order) {
		e.target.innerText = 'x';
		order = false;
		gaPR();
	}
})
console.log(cells);

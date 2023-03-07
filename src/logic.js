var c = document.getElementById('board');
var cells = [	c.rows[0].cells[0],	c.rows[1].cells[0],	c.rows[2].cells[0],

		c.rows[0].cells[1],	c.rows[1].cells[1],	c.rows[2].cells[1],
	
		c.rows[0].cells[2],	c.rows[1].cells[2],	c.rows[2].cells[2]]

document.getElementById('board').addEventListener("click", function(e) {
		if (e.target.id == 'border' {
		    return 0;
		} else {
			e.target.innerText = 'x';
		}
		})
console.log(cells);

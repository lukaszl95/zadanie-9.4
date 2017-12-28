drawTree(5);
drawTree(10);
function drawTree (tree) {
	for (var i = 0; i < tree; i++) {
		var star = '';
		for (var j = 0; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}
	
var stepsize = 0.0000001; // determines speed of marker movement

window.onkeydown = function(e){
	//the following is a compact if statement structure
	/*	if(e.keyCode) { key = e.keyCode; }
		else { key = e.which; } */
	var key = e.keyCode ? e.keyCode : e.which;
	
	switch (key){
		case 87:
		case 38:
			//up key
			break;
		case 83:
		case 40:
			//down key
			break;
		case 65:
		case 37:
			//left key
			break;
		case 68:
		case 39:
			//right key
			break;
		default:
			//do nothing
	}
};

console.log("keylistener.js exectuted successfully");
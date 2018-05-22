// var express = require('express');
// var app = express();

// create model for data structure
//  array of arrays
// listen for click events on table

/*
	[[0,1,2],
	 [3,4,5],
	 [6,7,8]]
*/

var state = [ new Array(3),
						  new Array(3),
						  new Array(3) ];

// var mapping = {
// 	0: this.state[0][0],
// 	1: this.state[0][1],
// 	2: this.state[0][2],
// 	3: this.state[1][0],
// 	4: this.state[1][1],
// 	5: this.state[1][2],
// 	6: this.state[2][0],
// 	7: this.state[2][1],
// 	8: this.state[2][2],
// };
var mapping = {
	0: [0, 0],
	1: [0, 1],
	2: [0, 2],
	3: [1, 0],
	4: [1, 1],
	5: [1, 2],
	6: [2, 0],
	7: [2, 1],
	8: [2, 2],
};

var x = 'X';
var o = 'O';
var firstMove = true;
var previous;

var clickEvent = function(id) {
	// console.log("clickEvent", id);
	if (firstMove) {
		setX(id);
		firstMove = false;
		previous = x;
	} else if (previous === x) {
		previous = o;
		setO(id);
	} else {
		previous = x;
		setX(id);
	}
}

var setX = function(id) {
	// TODO: check is this has alreaddy been set
	var element = document.getElementById(id);
	element.innerHTML = x;

	setState(id, x);
}

var setO = function(id) {
	// TODO: check is this has alreaddy been set
	var element = document.getElementById(id);
	element.innerHTML = o;

	setState(id, o);
}

var setState = function(id, letter) {

	var stateLocationArray = mapping[id];
	// [0, 1]
	state[stateLocationArray[0]][stateLocationArray[1]] = letter;
	// check for winner
}

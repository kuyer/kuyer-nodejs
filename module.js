'use strict';

var greet = function(name) {
	return 'hello, '+name+'!';
};

var add = function(a, b) {
	return a+b;
};

//module.exports = greet;
module.exports = {
	greet: greet,
	add: add
};
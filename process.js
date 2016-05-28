'use strict';

process.on('exit', function(code) {
	console.log('exit. code: '+code);
});

process.nextTick(function() {
	console.log('process.nextTick callback.');
});

console.log('process.nextTick was set.');
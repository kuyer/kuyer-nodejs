'use strict';

var fs = require('fs');
fs.readFile('data/poem.txt', 'utf-8', function(err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
		var buf = new Buffer(data, 'utf-8');
		console.log('to-buf: '+buf);
		var text = buf.toString('utf-8');
		console.log('to-text: '+text);
	}
});
fs.readFile('data/a01.jpg', function(err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log(data.length + ' bytes.');
		console.log(data);
	}
});

try {
	var data = fs.readFileSync('data/poem.txt', 'utf-8');
	console.log('read sync: '+data);
} catch(err) {
	console.log('read file sync: '+err);
}

fs.writeFile('data/output1.txt', 'hello, write nodejs!', function(err) {
	if(err) {
		console.log('write err: '+err);
	} else {
		console.log('write success.');
	}
});
fs.writeFileSync('data/output2.txt', 'hello, write sync nodejs');

fs.stat('data/a01.jpg', function(err, stat) {
	if(err) {
		console.log('file stat err. '+err);
	} else {
		console.log('file stat: isFile='+stat.isFile());
		console.log('file stat: isDirectory='+stat.isDirectory());
		if(stat.isFile()) {
			console.log('file size: '+stat.size);
			console.log('file birthtime: '+stat.birthtime);
			console.log('file mtime: '+stat.mtime);
		}
	}
});

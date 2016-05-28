'use strict';
var mdl = require('./module');

var content = mdl.greet('nodejs');
console.log(content);

var result = mdl.add(4, 6);
console.log(result);

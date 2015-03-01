var fs = require('fs');

console.log('starting');
//async
fs.readFile('sample.txt', function(err, data){
	console.log('Contents:'+data);
});

//sync
var content = fs.readFileSync('sample.txt');

console.log('carry on executing');
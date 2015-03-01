var fs = require('fs');
console.log('started');
var config = JSON.parse(fs.readFileSync('config.json'));
console.log('initial config :', config);

fs.watchFile('config.json',function(curr,prev){
	console.log('config file has been changed.');
	 config = JSON.parse(fs.readFileSync('config.json'));
	console.log('new config file :', config);
});
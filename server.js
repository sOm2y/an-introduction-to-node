// var http = require('http');
// var fs = require('fs');
// console.log('Starting');
// var config = JSON.parse(fs.readFileSync('config.json'));
// var host = config.host
// var port = config.port;


// var server = http.createServer(function(req,res){

// 	console.log('received request :'+ req.url);

// 	fs.readFile('./public'+req.url, function(err,data){
// 		if(err){
// 			res.writeHead(404,{"Content-type":"text/plain"});
// 			res.end('Sorry the page was not found');
// 		}else{
// 			res.writeHead(200,{"Content-type":"text/html"});
// 			res.end(data);
// 		}
// 	});


	
// });

// server.listen(port,host,function(){
// 	console.log('listening' + host + ':' +port);
// });


// fs.watchFile('config.json',function(){
// 	config = JSON.parse(fs.readFileSync('config.json'));
// 	server.close();
// 	host =config.host;
// 	port =config.port;
// 	server.listen(port,host,function(){
// 		console.log('listening' + host + ':' +port);
// 	});
// });





var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json'));
var host = config.host
var port = config.port;
var express = require('express');

var app = express();

app.use(app.router);
app.use(express.static(__dirname+'/public'));


app.get('/',function(req,res){
	res.send('hello!');


}).listen(port,host);































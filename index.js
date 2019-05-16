// var http = require('http');
// var fs = require('fs');
// let filenya = "";
// http.createServer((req,res) => {
// 	fs.readFile(filenya, (err, data) => {
// 		res.writeHead(200, {'Content-Type' : 'text/html'});
// 		res.write(data);
// 		res.end()
// 	})

// }).listen(8080);

var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/' + "h_flexbox.html")
})

app.listen(3000, () => console.log('oke'))

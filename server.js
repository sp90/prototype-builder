//Core Node.js
var path = require('path');

//External Dependencies
var express = require('express');
var morgan = require('morgan');
var compression = require('compression');

var app = express();
var port = process.env.PORT || 3000;

app.use(compression());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/dist')));

app.all('*', function(req, res) {
	return res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port);

console.log('listening on port: %d', port);
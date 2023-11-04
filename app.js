const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/forms', function(req, res){
  res.sendFile(path.join(__dirname, '/forms.html'));
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/404.html'));
});


app.listen(port);
console.log('Server started at http://localhost:' + port);
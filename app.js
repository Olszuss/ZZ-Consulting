const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
app.use(compression());
app.disable('x-powered-by');
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
app.get('/forms', function(req, res) {
  res.sendFile(path.join(__dirname, '/forms.html'));
});

app.get('/robots.txt', function(req, res){
  res.sendFile(path.join(__dirname, '/robots.txt'));
});
app.get('/sitemap.xml', function(req, res){
  res.sendFile(path.join(__dirname, '/sitemap.xml'));
});

app.get('/partnerzy/pzu', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/pzu.html'));
});
app.get('/partnerzy/allianz', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/allianz.html'));
});
app.get('/partnerzy/generali', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/generali.html'));
});



app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/404.html'));
});


app.listen(port);
console.log('Server started at port: ' + port);
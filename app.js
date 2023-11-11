const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const dotenv = require('dotenv').config();

const app = express();
app.use(compression());
app.disable('x-powered-by');
const port = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.json());



app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

app.post('/contact', 
	[
		check('name').notEmpty().withMessage('Imię jest wymagane!'),
    check('email').isEmail().withMessage('Nieprawidłowy adres email!'),
		check('subject').notEmpty().withMessage('Temat jest wymagany!'),
		check('message').notEmpty().withMessage('Wiadomość jest wymagana!')
	], (req, res) => {

		const errors = validationResult(req);

		if(!errors.isEmpty())
		{
			res.render('contact', { errors : errors.mapped() });
		}
		else
		{
			const transporter = nodemailer.createTransport({
				service : 'Gmail',
				auth : {
					user : process.env.EMAIL_USERNAME,
					pass : process.env.EMAIL_PASSWORD
				}
			});

			const mail_option = {
				from : req.body.email,
				to : process.env.EMAIL_USERNAME,
				subject : req.body.subject,
				html: 
        `<div style="text-align: center;">
        <h1>Otrzymano nową wiadomość z formularza kontaktowego!</h1>
        </div>
        <h2>Wiadomość od ${req.body.name} </h2>
        <h3>Mail: ${req.body.email}</h3>
        <p>Wiadomość: <br>
        ${req.body.message}</p>
        `
			};

			transporter.sendMail(mail_option, (error, info) => {
				if(error)
				{
					console.log(error);
				}
				else
				{
					res.redirect('/success');
				}
			});
		}
});

app.get('/success', (req, res) => {

  res.sendFile(path.join(__dirname, '/success.html'));

});

app.get('/about/', function(req, res) {
  res.sendFile(path.join(__dirname, '/about.html'));
});
app.get('/forms/', function(req, res) {
  res.sendFile(path.join(__dirname, '/forms.html'));
});

app.get('/robots.txt', function(req, res){
  res.sendFile(path.join(__dirname, '/robots.txt'));
});
app.get('/sitemap.xml', function(req, res){
  res.sendFile(path.join(__dirname, '/sitemap.xml'));
});
/******************************************** */
//Partners
/******************************************** */
app.get('/partnerzy/pzu/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/pzu.html'));
});
app.get('/partnerzy/allianz/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/allianz.html'));
});
app.get('/partnerzy/generali/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/generali.html'));
});
app.get('/partnerzy/hdi/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/hdi.html'));
});
app.get('/partnerzy/interrisk/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/interrisk.html'));
});
app.get('/partnerzy/link4/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/link4.html'));
});
app.get('/partnerzy/mtu/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/mtu.html'));
});
app.get('/partnerzy/proama/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/proama.html'));
});
app.get('/partnerzy/uniqa/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/uniqa.html'));
});
app.get('/partnerzy/warta/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/warta.html'));
});
app.get('/partnerzy/wiener/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/wiener.html'));
});
app.get('/partnerzy/ergo-hestia/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/ergo-hestia.html'));
});
app.get('/partnerzy/', function(req, res) {
  res.sendFile(path.join(__dirname, '/partners/partners.html'));
});




app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/404.html'));
});


app.listen(port);
console.log('Server started at port: ' + port);
const express = require("express");
const path = require("path");
const compression = require("compression");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
// const generatePdf = require("./generatePDF");
const ejs = require("ejs");
const dotenv = require("dotenv").config();

const app = express();
app.use(compression());
app.disable("x-powered-by");
let options = {
  maxAge: 3600000*2,
  etag: true,
  redirect: true,
  setHeaders: function(res, path, stat) {
    res.set ({
      'Cache-Control': (path.includes('index.html')) ? 'no-cache, max-age=3600000' : 'public, max-age=3600000'
    })
  }
}
const port = process.env.PORT || 8080;
app.use(express.static("public", options));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json());


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));

});

app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "/success.html"));
});
/******************************************** */
//Tools
/******************************************** */
app.get("/narzedzia", (req, res) =>{
  res.sendFile(path.join(__dirname, "/tools/tools.html"));
});

app.get("/narzedzia/wypowiedzenie-oc", (req,res) =>{
  res.sendFile(path.join(__dirname, "/tools/wypowiedzenie-oc.html"))
});
app.post("/narzedzia/wypowiedzenie-oc", (req,res) => {
  console.log(req.body);
  res.send("Kiedyś zadziała! :)");
});
app.get("/narzedzia/kalkulator-kary", (req, res) =>{
  res.sendFile(path.join(__dirname, "/tools/kalkulator-kary.html"));
});
app.get("/narzedzia/powiadomienie-o-zbyciu", (req,res) => {
  res.sendFile(path.join(__dirname, "/tools/powiadomienie-o-zbyciu.html"));
});
app.get("/narzedzia/powiadomienie-o-wyrejestrowaniu", (req,res) => {
  res.sendFile(path.join(__dirname, "/tools/powiadomienie-o-wyrejestrowaniu.html"));
});
// Other routes
app.get("/about/", function (req, res) {
  res.sendFile(path.join(__dirname, "/about.html"));
});
app.get("/forms/", function (req, res) {
  res.sendFile(path.join(__dirname, "/forms.html"));
});
app.get("/robots.txt", function (req, res) {
  res.sendFile(path.join(__dirname, "/robots.txt"));
});
app.get("/sitemap.xml", function (req, res) {
  res.sendFile(path.join(__dirname, "/sitemap.xml"));
});
app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "/contact.html"));
});
app.post("/contact",
  [
    check("name").notEmpty().withMessage("Imię jest wymagane!"),
    check("email").isEmail().withMessage("Nieprawidłowy adres email!"),
    check("subject").notEmpty().withMessage("Temat jest wymagany!"),
    check("message").notEmpty().withMessage("Wiadomość jest wymagana!"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("contact", { errors: errors.mapped() });
    } else {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mail_option = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_RECEIVES,
        subject: req.body.subject,
        html: `
		<img src="http://node.olszus.usermd.net/resources/Icons/android-chrome-192x192.png">
		<div style="text-align: center;">
        <h1>Otrzymano nową wiadomość z formularza kontaktowego!</h1>
        </div>
        <h2>Wiadomość od ${req.body.name} </h2>
        <h3>Mail: ${req.body.email}</h3>
        <h3>Wiadomość: </h3>
        <p>${req.body.message}</p>
        `,
      };

      transporter.sendMail(mail_option, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          res.redirect("/success");
        }
      });
    }
  }
);
/******************************************** */
//Partners
/******************************************** */
const partnersRoutes = [
  "pzu",
  "allianz",
  "generali",
  "hdi",
  "interrisk",
  "link4",
  "mtu",
  "proama",
  "uniqa",
  "warta",
  "wiener",
  "ergo-hestia",
];

partnersRoutes.forEach((partner) => {
  app.get(`/partnerzy/${partner}`, (req, res) => {
    res.sendFile(path.join(__dirname, `/partners/${partner}.html`));
  });

});
app.get("/partnerzy/", function (req, res) {
  res.sendFile(path.join(__dirname, "/partners/partners.html"));
});
// 404 Route
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/404.html"));
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});

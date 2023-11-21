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
      'Cache-Control': (path.includes('index.ejs')) ? 'no-cache, max-age=3600000' : 'public, max-age=3600000'
    })
  }
}
const port = process.env.PORT || 8080;
app.use(express.static("public", options));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.json());


contactCheck = [
  check("name").notEmpty().withMessage("Imię jest wymagane!"),
  check("email").isEmail().withMessage("Nieprawidłowy adres email!"),
  check("subject").notEmpty().withMessage("Temat jest wymagany!"),
  check("message").notEmpty().withMessage("Wiadomość jest wymagana!"),
]

app.get("/", function (req, res) {
  res.render("../pages/index", {title: 'Index'});
});
//Tools
app.get("/narzedzia", (req, res) =>{
  res.render("../pages/tools/tools", {title: 'Narzedzia'});
});
app.get("/narzedzia/wypowiedzenie-oc", (req,res) =>{
  res.render("../pages/tools/wypowiedzenie-oc", {title: 'Narzedzia'});
});
app.post("/narzedzia/wypowiedzenie-oc", (req,res) => {
  console.log(req.body);
  res.send("Kiedyś zadziała! :)");
});
app.get("/narzedzia/kalkulator-kary", (req, res) =>{
  res.render("../pages/tools/kalkulator-kary", {title: 'Narzedzia'});
});
app.get("/narzedzia/powiadomienie-o-zbyciu", (req,res) => {
  res.render("../pages/tools/powiadomienie-o-zbyciu", {title: 'Narzedzia'});
});
app.get("/narzedzia/powiadomienie-o-wyrejestrowaniu", (req,res) => {
  res.render("../pages/tools/powiadomienie-o-wyrejestrowaniu", {title: 'Narzedzia'});
});
app.get("/faq/slownik-pojec", (req, res) => {
  res.render("../pages/faq/slownik-pojec", {title: 'Faq'});
});
app.get("/faq/", (req, res) => {
  res.render("../pages/faq/faq", {title: 'Faq'});
});
// Other routes
app.get("/o-nas/", function (req, res) {
  res.render("../pages/about" , {title: 'O-nas'});
});
app.get("/druki/", function (req, res) {
  res.render("../pages/forms", {title: 'Druki'});
});
app.get("/robots.txt", function (req, res) {
  res.sendFile(path.join(__dirname, "/robots.txt"));
});
app.get("/sitemap.xml", function (req, res) {
  res.sendFile(path.join(__dirname, "/sitemap.xml"));
});
app.get("/kontakt", function (req, res) {
  res.render("../pages/contact", {title: 'Kontakt'});
});
app.post("/kontakt",contactCheck,(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("contact", { title:'Kontakt', errors: errors.mapped() });
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
        html: 
        `
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
app.get("/success", (req, res) => {
  res.render("../pages/success");
});

//Partners

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
    res.render(`../pages/partners/${partner}` , {title: "Partnerzy"});
  });

});
app.get("/partnerzy/", function (req, res) {
  res.render("../pages/partners/partners", {title: "Partnerzy"});
});
// 404 Route
app.get("*", function (req, res) {
  res.render("../pages/404" , {title: "404"});
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});

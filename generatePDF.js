const fs = require("fs");
const path = require("path");
const utils = require("util");
const puppeteer = require("puppeteer");
const hb = require("handlebars");
const readFile = utils.promisify(fs.readFile);




async function getTemplateHtml(htmlTemplatePath) {
    let templatePath;
    try {
      templatePath = path.resolve(htmlTemplatePath);
      return await readFile(templatePath, "utf8");
    } catch (err) {
      return Promise.reject("Could not load html template");
    }
  }
  async function generatePdf(htmlTemplatePath, data = {}, pdfFormatDetails = {}) {
    let PDF;
    await getTemplateHtml(htmlTemplatePath).then(async (res) => {
      const template = hb.compile(res);
      const result = await template(data);
      const browser = await puppeteer.launch({headless: 'new'});
      const page = await browser.newPage();
      await page.setContent(result);
      PDF = await page.pdf(pdfFormatDetails);
      await browser.close();
    });
    return PDF;
  }
  
  module.exports = { generatePdf };
  
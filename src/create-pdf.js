import puppeteer from "puppeteer";
import fs from "fs";

export default async function createPdf(outputPath, htmlContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent);

  await page.emulateMediaType("print");
  await page.pdf({
    path: outputPath,
    format: "A4",
  });

  await browser.close();
}

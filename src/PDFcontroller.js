import renderTemplate from "./render-template.js";
import createPdf from "./create-pdf.js";

export default async function makePDFController(req, res, next) {
  try {
    const { firstName, lastName } = req.body;
    const htmlContent = renderTemplate(
      {
        firstName,
        lastName,
      },
      "input"
    );

    await createPdf("output.pdf", htmlContent);
    res.send(htmlContent);
  } catch (error) {
    console.log(`error`, error);
  }
}

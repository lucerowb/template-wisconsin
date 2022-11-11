import express, { urlencoded, json } from "express";
import makePDFController from "./PDFcontroller.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ?? 5000;

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/form.html"));
});

app.post("/getPDF", makePDFController);

app.listen(port, () => {
  console.log(`server running at ${port}`);
});

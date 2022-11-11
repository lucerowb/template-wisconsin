import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default function renderTemplate(data, templateName) {
  const templateFile = fs.readFileSync(
    path.join(__dirname, `templates/${templateName}.hbs`),
    "utf-8"
  );
  const template = handlebars.compile(templateFile);
  const rendered = template(data);
  return rendered;
}

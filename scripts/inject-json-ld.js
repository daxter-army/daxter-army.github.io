import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.resolve(scriptDirectory, "..");
const schemaPath = path.join(rootDirectory, "schema", "profile.json");
const htmlPath = path.join(rootDirectory, "docs", "index.html");
const placeholder = '<script id="json-ld-placeholder" type="application/ld+json"></script>';

const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
const html = fs.readFileSync(htmlPath, "utf8");

if (!html.includes(placeholder)) {
  throw new Error(`JSON-LD placeholder not found in ${htmlPath}`);
}

// Escape '<' so schema strings cannot accidentally terminate the script tag.
const json = JSON.stringify(schema).replace(/</g, "\\u003c");
const script = `<script type="application/ld+json">${json}</script>`;

fs.writeFileSync(htmlPath, html.replace(placeholder, script));
console.log(`Injected JSON-LD from ${schemaPath} into ${htmlPath}`);

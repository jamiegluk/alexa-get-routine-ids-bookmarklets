import { htmlEscape } from "escape-goat";
import { readFileSync, writeFileSync } from "fs";

import * as packageJson from "./package.json";

const usText = readFileSync(".build/bookmarklet.us.js").toString();
const ukText = readFileSync(".build/bookmarklet.uk.js").toString();

const prefix = "javascript:";

const usURI = prefix + encodeURIComponent(usText);
const ukURI = prefix + encodeURIComponent(ukText);

let pageText = readFileSync("template.html").toString();

pageText = pageText.replace(/{{URI_US}}/g, usURI);
pageText = pageText.replace(/{{URI_UK}}/g, ukURI);

pageText = pageText.replace(/{{TITLE}}/g, htmlEscape(packageJson.title));
pageText = pageText.replace(/{{AUTHOR}}/g, htmlEscape(packageJson.author));
pageText = pageText.replace(/{{DESCRIPTION}}/g, htmlEscape(packageJson.description));
pageText = pageText.replace(/{{KEYWORDS}}/g, htmlEscape(packageJson.keywords.join(" ")));
pageText = pageText.replace(/{{VERSION}}/g, htmlEscape(packageJson.version));

writeFileSync(".build/index.html", pageText);

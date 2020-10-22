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

pageText = pageText.replace(/{{TITLE}}/g, escape(packageJson.title));
pageText = pageText.replace(/{{AUTHOR}}/g, escape(packageJson.author));
pageText = pageText.replace(/{{DESCRIPTION}}/g, escape(packageJson.description));
pageText = pageText.replace(/{{KEYWORDS}}/g, escape(packageJson.keywords.join(" ")));
pageText = pageText.replace(/{{VERSION}}/g, escape(packageJson.version));

writeFileSync(".build/index.html", pageText);

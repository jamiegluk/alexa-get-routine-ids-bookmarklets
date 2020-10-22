import { readFileSync, writeFileSync } from "fs";

const usText = readFileSync(".build/bookmarklet.us.js").toString();
const ukText = readFileSync(".build/bookmarklet.uk.js").toString();

const prefix = "javascript:";

const usURI = prefix + encodeURIComponent(usText);
const ukURI = prefix + encodeURIComponent(ukText);

let pageText = readFileSync("template.html").toString();

pageText = pageText.replace("{{URI_US}}", usURI);
pageText = pageText.replace("{{URI_UK}}", ukURI);

writeFileSync(".build/index.html", pageText);

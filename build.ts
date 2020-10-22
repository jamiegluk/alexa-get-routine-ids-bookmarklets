import { readFileSync, writeFileSync } from "fs";

const usText = readFileSync(".build/bookmarklet.us.js").toString();
const ukText = readFileSync(".build/bookmarklet.uk.js").toString();

const prefix = "javascript:";

const usURI = prefix + encodeURIComponent(usText);
const ukURI = prefix + encodeURIComponent(ukText);

let readmeText = readFileSync("template.md").toString();

readmeText = readmeText.replace("{{URL_US}}", usURI);
readmeText = readmeText.replace("{{URL_UK}}", ukURI);

writeFileSync("README.md", readmeText);

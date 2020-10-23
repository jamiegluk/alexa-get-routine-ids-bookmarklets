interface IRaw {
  automationId: string;
  name: string;
  triggers: [{ payload: { utterance?: string } }];
}
interface ITransformed {
  automationId: string;
  name: string;
  utterance?: string;
}

// Compile URL
const tld = process.env.TLD!;
const assoc_handle = process.env.ASSOC_HANDLE!;

const url = `https://alexa.amazon.${tld}/api/behaviors/automations?limit=2000`;
const encodedUrl = encodeURIComponent(url);
const loginAndRedirectUrl = `https://www.amazon.${tld}/ap/signin?showRmrMe=1&openid.return_to=${encodedUrl}&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=${assoc_handle}&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&`;

// Redirect to the correct page if needed
if (location.href.split("?")[0] !== url.split("?")[0]) {
  alert("Run bookmarklet again on API page...\n(Login first, if required).");
  location.href = loginAndRedirectUrl;
  throw new Error("Wrong page");
}

// On correct page, get content
let parsed: IRaw[];
try {
  parsed = JSON.parse(document.body.textContent!);
} catch (e) {
  // Need to login to Alexa
  alert("Login to Alexa and then run bookmarklet again...");
  location.href = loginAndRedirectUrl;
  throw new Error("Alexa login required");
}

// Transform
let results: ITransformed[] = parsed.map(({ automationId, name, triggers }: IRaw) => ({
  automationId,
  name,
  utterance: triggers[0].payload.utterance,
}));

// Apply filters
if (confirm("Filter by name?")) {
  const nameText = prompt("Name search text");
  if (nameText) {
    results = results.filter((r) => r.name.toLowerCase().includes(nameText.toLowerCase()));
  }
}
if (confirm("Filter by utterance (trigger phrase)?")) {
  const utteranceText = prompt("Utterance search text");
  if (utteranceText) {
    results = results.filter((r) =>
      r.utterance?.toLowerCase().includes(utteranceText.toLowerCase())
    );
  }
}

// Display results
const jsonText = JSON.stringify(results, null, 2);
console.info("Alexa get routine Ids:");
console.dir(results);
alert(jsonText);

// Prevent error when ending bookmarklet
location.href = url;

interface IRaw {
  automationId: string;
  name: string;
  triggers: [{ payload: { utterance?: string } }];
}
interface ITransformed {
  automationId: string;
  name: string;
  utterance: string;
}

// Redirect to the correct page if needed
const url = process.env.URL!;
if (location.href !== url) {
  alert("Run bookmarklet again on API page...");
  location.href = url;
} else {
  //
  // On correct page, get content
  let results: ITransformed[] = JSON.parse(document.body.textContent!).map(
    ({ automationId, name, triggers }: IRaw) => ({
      automationId,
      name,
      utterance: triggers[0].payload.utterance,
    })
  );

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
  console.dir("Alexa get routine Ids:", results);
  alert(jsonText);
}

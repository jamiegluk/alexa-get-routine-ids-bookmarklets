# Alexa Get-Routine-IDs Bookmarklets

[![GitHub package.json version](https://img.shields.io/github/package-json/v/jamiegluk/alexa-get-routine-ids-bookmarklets?color=blue)](https://github.com/jamiegluk/alexa-get-routine-ids-bookmarklets/releases)
[![GitHub lint Workflow Status](https://img.shields.io/github/workflow/status/jamiegluk/alexa-get-routine-ids-bookmarklets/Lint?label=lint)](https://github.com/jamiegluk/alexa-get-routine-ids-bookmarklets/actions?query=workflow%3A%22Lint%22)
[![GitHub build Workflow Status](https://img.shields.io/github/workflow/status/jamiegluk/alexa-get-routine-ids-bookmarklets/Build?label=build)](https://github.com/jamiegluk/alexa-get-routine-ids-bookmarklets/actions?query=workflow%3A%22Build%22)
[![GitHub deploy Workflow Status](https://img.shields.io/github/workflow/status/jamiegluk/alexa-get-routine-ids-bookmarklets/Deploy?label=deploy)](https://github.com/jamiegluk/alexa-get-routine-ids-bookmarklets/actions?query=workflow%3A%22Deploy%22)

Browser bookmarklets for easily searching `automationId` values for **routines** from the Amazon Alexa API

<br/>

## Bookmarklets

# [CLICK HERE TO GET](https://jamiegluk.github.io/alexa-get-routine-ids-bookmarklets)

<br/>

## Installation

You need:

- [Node.js](https://nodejs.org) / `choco install nodejs`
- [Yarn](https://yarnpkg.com/) / `choco install yarn`

Initially build dependencies via this command in the project folder:

```
yarn install
```

## Usage

```bash
yarn build
yarn deploy
```

---

### All commands

| Command            | Description                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| `yarn build`       | Build app as dev to `/dist/` and serve @ `http://localhost:1234`                                    |
| `yarn build:us`    | Builds `bookmarklet.ts` using Amazon US (.com) URL to `/.build/bookmarklet.us.js``                  |
| `yarn build:uk`    | Builds `bookmarklet.ts` using Amazon UK (.co.uk) URL to `/.build/bookmarklet.uk.js`                 |
| `yarn build:env`   | Delegate for above 2, runs parcel                                                                   |
| `yarn build:html`  | Takes JS files and injects as URIs into `template.html` content, outputting to `/.build/index.html` |
| `yarn deploy`      | Deploys GitHub pages from `/.build/index.html`                                                      |
| `yarn lint`        | Run Prettier linter                                                                                 |
| `yarn lint:fix`    | Run Prettier linter and fix issues                                                                  |
|                    |
| `yarn clean`       | Runs all clean commands below                                                                       |
| `yarn clean:dist`  | Removes _dist_ folder and its contents                                                              |
| `yarn clean:cache` | Removes Parcel _.cache_ folder and its contents                                                     |

---

## Contributing

Feel free to submit a pull-request or fork as your own.

## Copyright & Licensing

Licensed for use under the MIT License.  
See [LICENSE](LICENSE).

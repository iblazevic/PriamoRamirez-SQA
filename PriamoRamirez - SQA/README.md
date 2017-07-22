# Priamo Ramirez - Senior QA Engineer

## Terms

* Page object - a semantic model and controller of a browser "page" (or part of a page representing the current "view"
  as seen by the user).

## Setting up local environment

### Prerequisites

In order to run the tests you need to have NodeJS installed (preferrably version 6.10.3 or higher). After installing
Node, issue this command in the ** Priamo Ramirez - Senior QA Engineer/ ** directory:

```bash
 $ npm update
```

This will install dependencies needed for running tests:
  * mocha - the test framework, https://mochajs.org;
  * webdriverIO - WebDriver protocol bindings for NodeJS, http://webdriver.io;
  * wdio-mnocha-framework - glue for using WebdriverIO with Mocha;
  * wdio-spec-reporter - for reporting test results in the Spec format;

You need Java to run the Selenium standalone server. You will also need to download the Selenium standalone server (a
single JAR file) and a Web driver for each browser in which you want to run tests (one file per driver: "chromedriver"
for chrome and "geckodriver" for firefox). You should download all these files somewhere on your machine.

These files can be downloaded manually from:
* http://www.seleniumhq.org/download/
* https://github.com/mozilla/geckodriver/releases
* https://sites.google.com/a/chromium.org/chromedriver/downloads


### Directory layout

* pageObjects - page object model code
* node_modules - local NPM dependencies (this directory is created when running `npm update`, see above)
* errorShots - screenshots of the browser. automatically taken
* test - Folders containing the different tasks

Files in the root directory:
* package.json - Node module declaration (most importantly, npm dependencies are declared here).
* wdio.conf.js - WebdriverIO configuration script.

## Running tests

You can run test by using the webdriverIO test runner directly (`./node_modules/webdriverio/bin/wdio`) or via
the provided launcher file (`npm test`, recommended).

Refer to the WebdriverIO documentation for command line parameters (selecting tests to run, etc)

## Issues

When creating the login automated test cases, due to the page design of have a form submit, webdriverIO throws a warning on have to avoid to use submit(),
What I did is implement the .click() with the object id.

Never had automated frames before, so had to investigate about how to focus on the frame.

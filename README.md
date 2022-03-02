# taskf-fb

## Prerequisites

- Node v12+

## Instructions

Run `npm install` in root directory to install dependencies.

Run `npm run wdio` to execute the test.

## Reporting

It is necessary to have Allure CLI, which can be installed by following the instructions located here:
https://docs.qameta.io/allure-report/reporting/commandline.

To run Allure server with report, run ``npm run report``.

## Additional

Tests are set to run on Firefox and Chrome in parallel using WebDriverIO framework, which is Javascript based.

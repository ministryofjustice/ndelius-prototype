# New Probation Services - Rapid Prototype

**Status**

[![CircleCI branch](https://img.shields.io/circleci/project/github/ministryofjustice/ndelius-prototype/master.svg)](https://circleci.com/gh/ministryofjustice/ndelius-prototype)
[![David](https://img.shields.io/david/ministryofjustice/ndelius-prototype.svg)](https://david-dm.org/ministryofjustice/ndelius-prototype)
[![David](https://img.shields.io/david/dev/ministryofjustice/ndelius-prototype.svg)](https://david-dm.org/ministryofjustice/ndelius-prototype?type=dev)

[![license](https://img.shields.io/github/license/ministryofjustice/ndelius-prototype.svg)](https://github.com/ministryofjustice/ndelius-prototype/blob/master/LICENSE)
![GitHub repo size in bytes](https://img.shields.io/github/repo-size/ministryofjustice/ndelius-prototype.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ministryofjustice/ndelius-prototype.svg)
![GitHub top language](https://img.shields.io/github/languages/top/ministryofjustice/ndelius-prototype.svg)

[![GitHub release](https://img.shields.io/github/release/ministryofjustice/ndelius-prototype.svg)](https://github.com/ministryofjustice/ndelius-prototype/releases)
![GitHub Release Date](https://img.shields.io/github/release-date/ministryofjustice/ndelius-prototype.svg)

**Latest changes**

![CircleCI](https://img.shields.io/circleci/project/github/ministryofjustice/ndelius-prototype.svg?label=last%20build)
[![Github commits (since latest release)](https://img.shields.io/github/commits-since/ministryofjustice/ndelius-prototype/latest.svg)](https://github.com/ministryofjustice/ndelius-prototype/commits/master)
![GitHub last commit](https://img.shields.io/github/last-commit/ministryofjustice/ndelius-prototype.svg)

---

:warning: **This is *NOT* production code and is used entirely for the rapid prototyping of new features for user testing.**

---

The prototype has been developed in order to rapidly develop UI and UX features in order to test with users before committing to development of the master application. 

This *README* details the use of *[npm]* as *[Yarn]* is a development preference and not a requirement; feel free to use whichever you prefer.

## Features

The prototype currently contains the following report journeys:

* [Parole Report Parom 1](./src/app/parom1/README.md)
* [Parole Report Parom 1 (OMIC)](./src/app/parom1-omic/README.md)
* [Short Format Pre-Sentence Report](./src/app/sfpsr/README.md) 
* [Pre-Sentence Report Addendum](./src/app/psr-addendum/README.md)  

## Requirements

The project requires [Node.js] >=10.0.0 <11.0.0

You will need to install the project dependencies (in the project dir):

`npm i -g @angular/cli`

`npm i`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Use the `-prod` flag to test a production build. This should **ONLY** be used to test a build before committing to *develop* and *master* branches and should **NOT** be used during active development.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Testing

As this is designed to allow rapid prototyping of both UI and UX; there's no requirement for extensive test coverage.
 
A simple "smoke test" principle has been used for both unit tests and e2e tests.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma].

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor].

### Testing a production build

Run `ng serve --prod` to test a production build. Navigate to `http://localhost:4200/`.

Production builds are used for deployment to AWS for user testing.

## Continuous Integration

The project is tested and built automatically through integration with [Circle CI].

Pushes to the master branch are also deployed automatically to AWS upon a successful build.

## Documentation

The project allows the generation of document based on the source code with [compodoc].

Run `npm run doc` to generate the documentation.

The generated documentation can then be found in the */documenation* folder.

**N.B. The generated documentation is NOT stored within the GitHub repository.**

### Writing & updating documentation

When writing/updating the documentation you can use the following command to auto watch for changes, regenerate and serve the documentation:

`./node_modules/.bin/compodoc -p tsconfig.json -n "nDelius Prototype" -w -s`

Navigate to `http://localhost:8080/`. The documentation will generate automatically and reload if you change any of the source files.

## Further info

In order to work with the Rapid Prototype code you should be familiar with [Angular] development and use of the [Angular CLI].

### Components

Many widely used controls have been componentised for consistency and rapid development purposes.

Each shared component *should* include their own [Markdown] file with instructions and information for that component.  

### State

The application manages state with *[@ngrx/store]* and stores state automatically in *[sessionStorage]*.

The application will automatically *re-hydrate* the state from *[sessionStorage]* if the browser is refreshed to ensure that any user input is not lost.

State will be cleared when the browser or tab is closed. 

To use the ngrx debugger, install the Redux Devtools extension for either Chrome or Firefox

See: https://github.com/zalmoxisus/redux-devtools-extension

### Project

This project uses:

* [Yarn].
* [Angular CLI].
* [Angular].
* [@ngrx/store].

---

![Browserstack](browserstack-logo.png)

With special thanks to [BrowserStack](https://www.browserstack.com) for providing cross browser testing.

[Node.js]: http://www.nodejs.org
[Karma]: https://karma-runner.github.io
[Protractor]: http://www.protractortest.org
[@ngrx/store]: https://github.com/ngrx/platform/blob/master/docs/store/README.md
[sessionStorage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
[Yarn]: https://yarnpkg.com
[npm]: https://npmjs.org
[Angular CLI]: https://cli.angular.io
[Angular]: https://angular.io
[compodoc]: https://compodoc.github.io/website
[Markdown]: https://daringfireball.net/projects/markdown
[Circle CI]: https://circleci.com/gh/ministryofjustice/ndelius-prototype/tree/feature%2Fe2e-tests

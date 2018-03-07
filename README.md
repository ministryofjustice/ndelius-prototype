# New Probation Services - Rapid Prototype

[![GitHub version](https://badge.fury.io/gh/ministryofjustice%2Fndelius-prototype.svg)](https://badge.fury.io/gh/ministryofjustice%2Fndelius-prototype)
[![Dependencies](https://david-dm.org/ministryofjustice/ndelius-prototype.svg)](https://david-dm.org/ministryofjustice/ndelius-prototype)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

[![CircleCI](https://circleci.com/gh/ministryofjustice/ndelius-prototype/tree/master.svg?style=svg)](https://circleci.com/gh/ministryofjustice/ndelius-prototype/tree/master)

![Browserstack](browserstack-logo.png)

With special thanks to [BrowserStack](https://www.browserstack.com) for providing cross browser testing.

---

**N.B. This is *NOT* production code and is used entirely for the rapid prototyping of new features.**

---

The prototype has been developed in order to rapidly develop UI and UX features in order to test with users before committing to development of the master application.

The prototype has been developed close to "vanilla" HTML so that design staff can work with the code more easily. 

This *README* details the use of *[npm]* as *[Yarn]* is a development preference and not a requirement; feel free to use whichever you prefer.

## Requirements

The project requires [Node.js] 6.x

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

As noted above; this should **ONLY** be used to test a build before committing to *develop* and *master* branches.

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

### State

The application manages state with *[@ngrx/store]* and stores state automatically in *[sessionStorage]*.

The application will automatically *re-hydrate* the state from *[sessionStorage]* if the browser is refreshed to ensure that any user input is not lost.

The state will be cleared on the *save as draft* and *report complete* pages.

State is also cleared when the browser or tab is closed. 

To use the ngrx debugger, install the Redux Devtools extension for either Chrome or Firefox

See: https://github.com/zalmoxisus/redux-devtools-extension

### Project

This project uses:

* [Yarn].
* [Angular CLI].
* [Angular].
* [@ngrx/store].

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

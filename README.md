# New Probation Services - Rapid Prototype

The prototype has been developed in order to rapidly develop UI and UX features in order to test with users before committing to development of the master application.

The prototype has been developed close to "vanilla" HTML so that design staff can work with the code more easily. 

**CircleCI build status:**

[![CircleCI](https://circleci.com/gh/ministryofjustice/ndelius-prototype/tree/master.svg?style=svg)](https://circleci.com/gh/ministryofjustice/ndelius-prototype/tree/master)

## Requirements

The project requires [Node.js] 6.x

You will need to install the project dependencies (in the project dir):

`npm install -g @angular/cli`

`npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Testing

As this is designed to allow rapid prototyping of both UI and UX; there's no requirement for extensive test coverage.
 
A simple "smoke test" principle has been used for both unit tests and e2e tests.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma].

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor].

## Further info

In order to work with the Rapid Prototype code you should be familiar with [Angular] 4 development and use of the [Angular CLI].

### State

The application manages state with *[@ngrx/store]* and stores state automatically in *[sessionStorage]*.

The application will automatically *re-hydrate* the state from *[sessionStorage]* if the browser is refreshed to ensure that any user input is not lost.

The state will be cleared on the *save as draft* and *report complete* pages.

State is also cleared when the browser or tab is closed. 

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
[Angular CLI]: https://cli.angular.io
[Angular]: https://angular.io

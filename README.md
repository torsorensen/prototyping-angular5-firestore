# Angular5 + Firestore Prototyping Template

This is a personal Angular5 template project. The overall purpose is to provide a quick starting point for prototyping and building everyday applications that store their data in the cloud. Functionality-wise, the project seeks go to beyond individual "getting started" templates and ties often used functionalities together in one application. While adding features, the rule is to follow best practice approaches as documented by the original authors whenever possible.

Pages included:
* Login / Register
* Items
* Item (detail)
* About

Current features implemented using best practice:
* Angular modular approach (CoreModule, SharedModule, FeatureModules)
* Angular shared data service (Returning Observables)
* Angular routing (including AuthGuard to restrict content behind login)
* Firestore cloud storage (using AngularFire2 for Observable data streams)
* Firebase Auth (using user specified email and password)

Current custom features
* Custom Debug Features (Upload user log files to Firebase Storage) *work in progress*

Roadmap features:
* Lazy-loaded modules
* Unit testing
* Sass precompilation
* Firestore Access Rules
* tbd ...

## Usage

**Edit Firestore details**
Setup your own Firestore project in the Firestore Console. 
After setting up your own Firestore project, please replace the src/environments/environment.ts details with your own including apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBzBETtJqFwZoP_JADF2Hd6lUcT3Fv7NVY',
        authDomain: 'angular5-template.firebaseapp.com',
        databaseURL: 'https://angular5-template.firebaseio.com',
        projectId: 'angular5-template',
        storageBucket: 'angular5-template.appspot.com',
        messagingSenderId: '176897092173'
    }
};

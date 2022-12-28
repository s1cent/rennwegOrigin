// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  googleSheetsApiKey: 'AIzaSyCWc3_7ZN0o0HC6PZNNcfs4NXXJ2TmUliQ',
  test: {
    spreadsheetId: '1p2LonI1UixhdJNd_5gTis5PwNubRjcWx571vOtTo3Us',
    worksheetName: 'Test',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

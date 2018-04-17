// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  applicatopnApiURL: {
    getApplicationsUrl: 'http://localhost:20003/api/applications',
    registerApplicationUrl: 'http://localhost:20003/api/applications',
    deleteApplicationUrl: 'http://localhost:20003/api/applications/',
    updateApplicationUrl: 'http://localhost:20003/api/applications/Update'
  },
  businessApiURL: {
    getBusinessesUrl: 'http://localhost:20003/api/Businesses/',
    updateBusinessUrl: 'http://localhost:20003/api/Businesses/Update',
    deleteBusinessUrl: 'http://localhost:20003/api/Businesses/',
    registerBusinessUrl: 'http://localhost:20003/api/Businesses'
  }
};

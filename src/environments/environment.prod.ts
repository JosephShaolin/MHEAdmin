export const environment = {
  production: true,
  applicatopnApiURL: {
    getApplicationsUrl: 'http://mhecluster.eastus.cloudapp.azure.com:20003/api/applications',
    registerApplicationUrl: 'http://mhecluster.eastus.cloudapp.azure.com:20003/api/applications',
    deleteApplicationUrl: 'http://mhecluster.eastus.cloudapp.azure.com:20003/api/applications/',
    updateApplicationUrl: 'http://mhecluster.eastus.cloudapp.azure.com:20003/api/applications/Update'
  },
  businessApiURL: {
    getBusinessesUrl: 'http://mhecluster.eastus.cloudapp.azure.com:20003/api/Businesses/',
    updateBusinessUrl: 'http://mhecluster.eastus.cloudapp.azure.com:20003/api/Businesses/Update',
    deleteBusinessUrl: 'http://mhecluster.eastus.cloudapp.azure.com:20003/api/Businesses/',
    registerBusinessUrl: 'http://mhecluster.eastus.cloudapp.azure.com:20003/api/Businesses'
  }
};

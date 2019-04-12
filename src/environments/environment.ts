// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiCoords: {
    url: 'https://www.mapquestapi.com/geocoding/v1',
    key: 'fvBPkCf742T3gS1F755wgbrqjmOxfNcv'
  },
  apiEarthquakes: {
    url: 'https://earthquake.usgs.gov',
  }
};

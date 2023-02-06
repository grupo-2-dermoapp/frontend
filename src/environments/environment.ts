// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: {
    API_URL: 'http://localhost:8080/dermoapp/auth/v1/',
    API_AUTH_ENDPOINT: 'patient-login',
    API_PERFIL_DERMATOLOGICO_ENDPOINT: 'dermo-profile-register',
    API_REGISTRO_USUARIO_ENDPOINT: 'patient-register',
    API_LOGIN_USUARIO_ENDPOINT: 'patient-login',
    API_REGISTRO_MEDICO_ENDPOINT: 'doctor-register',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

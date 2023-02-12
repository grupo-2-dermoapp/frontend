// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: {
    AUTH_API_URL: 'http://localhost:8080/dermoapp/auth/v1/',
    MEDICAL_CASES_URL: 'http://localhost:8080/dermoapp/medical-cases/v1/',
    API_PERFIL_DERMATOLOGICO_ENDPOINT: 'dermo-profile-register',
    API_REGISTRO_USUARIO_ENDPOINT: 'patient-register',
    API_LOGIN_USUARIO_ENDPOINT: 'patient-login',
    API_REGISTRO_MEDICO_ENDPOINT: 'doctor-register',
    API_LOGIN_MEDICO_ENDPOINT: 'doctor-login',
    API_CASOS_MEDICOS_ENDPOINT: 'medical-cases',
    API_SELECCIONAR_CASO_MEDICO_ENDPOINT: 'choose-medical-case',
    API_CREAR_DIAGNOSTICO_ENDPOINT: 'medical-diagnostic',
    API_CREAR_CONSULTA_MEDICA_ENDPOINT: 'create-medical-consultation'
    
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

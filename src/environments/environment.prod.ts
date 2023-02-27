export const environment = {
  production: true,
  API: {
    AUTH_API_URL: 'https://bhuux5lyc1.execute-api.us-east-2.amazonaws.com/dermoapp/auth/v1/',
    MEDICAL_CASES_URL: 'https://bhuux5lyc1.execute-api.us-east-2.amazonaws.com/dermoapp/medical-cases/v1/',
    CLINICAL_HISTORY_URL: 'https://bhuux5lyc1.execute-api.us-east-2.amazonaws.com/dermoapp/clinical-history/v1/',
    API_PERFIL_DERMATOLOGICO_ENDPOINT: 'dermo-profile-register',
    API_REGISTRO_USUARIO_ENDPOINT: 'patient-register',
    API_LOGIN_USUARIO_ENDPOINT: 'patient-login',
    API_REGISTRO_MEDICO_ENDPOINT: 'doctor-register',
    API_LOGIN_MEDICO_ENDPOINT: 'doctor-login',
    API_CASOS_MEDICOS_ENDPOINT: 'medical-cases',
    API_SELECCIONAR_CASO_MEDICO_ENDPOINT: 'choose-medical-case',
    API_CREAR_DIAGNOSTICO_ENDPOINT: 'medical-diagnostic',
    API_CREAR_CONSULTA_MEDICA_ENDPOINT: 'create-medical-consultation',
    API_HISTORIAS_CLINICAS_ENDPOINT: 'clincial-history'
  }
};

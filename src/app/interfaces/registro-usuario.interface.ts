export interface RegistroUsuarioBackendInterface {
  email: string;
  names: string;
  password: string;
  age: number;
  location: string;
  dermatological_profile_uuid: string;
  notification_token: string;
}

export interface RegistroUsuarioFormInterface {
  email: string;
  nombre: string;
  edad: number;
  residencia: string;
  perfilDematologico: string;
  password: string;
  passwordConfirmation: string;
  terminosCondiciones: boolean;
}

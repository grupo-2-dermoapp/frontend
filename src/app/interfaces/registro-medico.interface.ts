export interface RegistroMedicoBackendInterface {
    email:string;
    names:string;
    password:string;
}

export interface RegistroMedicoFormInterface {
    nombre: string;
    email: string;
    nacionalidad: string;
    especialidad: string;
    licenciaMedica: string;
    password: string;
    passwordConfirmation:string;
}
import { ResponseInterface } from "./response.interface";

export interface PacienteInterface {
    uuid: string;
    nombre: string;
}

export interface HistoriasClinicasResponseInterface extends ResponseInterface {
    medical_history: HistoriaClinicaBackendInterface[];
}

export interface HistoriaClinicaBackendInterface {
    uuid: string;
    patient: any;
    medical_cases: any[];
}

export interface HistoriaClinicaFrontendInterface {
    uuid: string;
    nombrePaciente: string;
    casosMedicos: any[];
}

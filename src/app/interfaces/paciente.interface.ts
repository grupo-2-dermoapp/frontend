import { ResponseInterface } from './response.interface';

export interface PacienteInterface {
  uuid: string;
  nombre: string;
}

export interface HistoriasClinicasResponseInterface extends ResponseInterface {
  clinical_history: HistoriaClinicaBackendInterface;
}

export interface HistoriaClinicaBackendInterface {
  patient_uuid: string;
  medical_cases: string[];
  updated_at: string;
}

export interface HistoriaClinicaFrontendInterface {
  pacienteId: string;
  ultimaActualizacion: string;
  casosMedicos: string[];
}

export interface PacientesResponseInterface extends ResponseInterface {
  patients: PacienteBackendInterface[];
}

export interface PacienteBackendInterface {
  names: string;
  email: string;
  age: string;
  uuid: string;
  location: string;
}

export interface PacienteFrontendInterface {
  uuid: string;
  nombre: string;
  edad: string;
  email: string;
  locacion: string;
}

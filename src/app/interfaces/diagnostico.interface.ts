import { ResponseInterface } from './response.interface';
export interface DiagnosticoFormInterface {
  nombreLesion: string;
  diagnostico: string;
  tratamiento: string;
}

export interface DiagnosticoBackendInterface {
  name_of_injury: string;
  diagnosis: string;
  treatment: string;
  medical_case_uuid: string;
  doctor?: { uuid: string };
  certification_percentage?: string;
  uuid?: string;
  doctor_uuid?: string;
}

export interface DiagnosticoBackendResponseInterface extends ResponseInterface {
  medical_diagnostic: DiagnosticoBackendInterface;
}

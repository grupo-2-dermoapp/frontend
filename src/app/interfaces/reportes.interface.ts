import { ResponseInterface } from './response.interface';

export interface ReporteInterface {
  certification_percentage: number;
  name_of_injury: string;
  diagnosis: string;
  treatment: string;
}

export interface ReporteResponseInterface extends ResponseInterface {
  diagnostics: ReporteInterface[];
}

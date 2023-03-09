import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaResponseInterface } from 'src/app/interfaces/consulta.interface';
import {
  DiagnosticoBackendInterface,
  DiagnosticoBackendResponseInterface,
} from 'src/app/interfaces/diagnostico.interface';
import { ResponseInterface } from 'src/app/interfaces/response.interface';
import { environment } from 'src/environments/environment';

const API_URL = environment.API.MEDICAL_CASES_URL;

@Injectable({
  providedIn: 'root',
})
export class DetalleConsultaService {
  constructor(private http: HttpClient) {}

  crearDiagnostico(
    diagnostico: DiagnosticoBackendInterface
  ): Observable<keyof ResponseInterface> {
    return this.http.post<keyof ResponseInterface>(
      API_URL + environment.API.API_DIAGNOSTICO_ENDPOINT,
      diagnostico
    );
  }

  obtenerConsulta(idConsulta: string): Observable<ConsultaResponseInterface> {
    return this.http.get<ConsultaResponseInterface>(
      API_URL + environment.API.API_CASOS_MEDICOS_ENDPOINT + '/' + idConsulta
    );
  }

  obtenerDiagnostico(
    idConsulta: string
  ): Observable<DiagnosticoBackendResponseInterface> {
    return this.http.get<DiagnosticoBackendResponseInterface>(
      API_URL + environment.API.API_DIAGNOSTICO_ENDPOINT + '/' + idConsulta
    );
  }

  agendarCita(
    doctorId: String,
    patientId: String
  ): Observable<keyof ResponseInterface> {
    return this.http.post<keyof ResponseInterface>(
      environment.API.AGENDA_URL + environment.API.API_AGENDAR_CITA_ENDPOINT,
      {
        doctor_uuid: doctorId,
        patient_uuid: patientId,
      }
    );
  }
}

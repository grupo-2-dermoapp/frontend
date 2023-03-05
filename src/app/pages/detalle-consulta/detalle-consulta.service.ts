import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaResponseInterface } from 'src/app/interfaces/consulta.interface';
import { DiagnosticoBackendInterface } from 'src/app/interfaces/diagnostico.interface';
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
      API_URL + environment.API.API_CREAR_DIAGNOSTICO_ENDPOINT,
      diagnostico
    );
  }

  obtenerConsulta(idConsulta: string): Observable<ConsultaResponseInterface> {
    return this.http.get<ConsultaResponseInterface>(
      API_URL + environment.API.API_CASOS_MEDICOS_ENDPOINT + '/' + idConsulta
    );
  }
}

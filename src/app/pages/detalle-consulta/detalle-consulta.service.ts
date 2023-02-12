import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosticoBackendInterface } from 'src/app/interfaces/diagnostico.interface';
import { ResponseInterface } from 'src/app/interfaces/response.interface';
import { environment } from 'src/environments/environment';

const API_AUTH_URL = environment.API.MEDICAL_CASES_URL+ environment.API.API_CREAR_DIAGNOSTICO_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class DetalleConsultaService {

  constructor(private http: HttpClient) { }

  crearDiagnostico(diagnostico:DiagnosticoBackendInterface):Observable<ResponseInterface>{
    return this.http.post<ResponseInterface>(API_AUTH_URL, diagnostico);
  }
}

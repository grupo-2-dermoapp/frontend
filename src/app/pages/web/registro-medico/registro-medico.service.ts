import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroMedicoBackendInterface } from 'src/app/interfaces/registro-medico.interface';
import { environment } from 'src/environments/environment';

const API_AUTH_URL = environment.API.API_URL + environment.API.API_REGISTRO_MEDICO_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class RegistroMedicoService {

  constructor(private http: HttpClient) { }

  registroMedico(registroMedico:RegistroMedicoBackendInterface,licenciaMedica:File): Observable<any> {
    return this.http.post<any>(API_AUTH_URL, registroMedico);
  }
}

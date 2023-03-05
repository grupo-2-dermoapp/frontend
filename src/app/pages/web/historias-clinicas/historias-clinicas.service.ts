import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PacientesResponseInterface } from 'src/app/interfaces/paciente.interface';
import { environment } from 'src/environments/environment';

const API_HISTORIAS_CLINICAS_URL =
  environment.API.CLINICAL_HISTORY_URL +
  environment.API.API_HISTORIAS_CLINICAS_ENDPOINT;

const API_PATIENTS_URL =
  environment.API.AUTH_API_URL + environment.API.API_PATIENTS;

@Injectable({
  providedIn: 'root',
})
export class HistoriasClinicasService {
  constructor(private http: HttpClient) {}

  getPatients(): Observable<PacientesResponseInterface> {
    return this.http.get<PacientesResponseInterface>(API_PATIENTS_URL);
  }
}

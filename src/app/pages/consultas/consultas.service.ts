import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HistoriasClinicasResponseInterface } from 'src/app/interfaces/paciente.interface';

const API_HISTORIAS_CLINICAS_URL =
  environment.API.CLINICAL_HISTORY_URL +
  environment.API.API_HISTORIAS_CLINICAS_ENDPOINT;

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  constructor(private http: HttpClient) {}

  obtenerHistoriasCLinicas(
    pacienteId: string
  ): Observable<HistoriasClinicasResponseInterface> {
    return this.http.get<HistoriasClinicasResponseInterface>(
      API_HISTORIAS_CLINICAS_URL + '/' + pacienteId
    );
  }
}

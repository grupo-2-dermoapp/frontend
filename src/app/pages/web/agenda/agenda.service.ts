import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AgendaDoctorInterface,
  AgendaResponseInterface,
} from 'src/app/interfaces/agenda.interface';
import { environment } from 'src/environments/environment';

const API_URL = environment.API.AGENDA_URL;

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  constructor(private http: HttpClient) {}

  getAgenda(doctorId: string): Observable<AgendaDoctorInterface> {
    return this.http.get<AgendaDoctorInterface>(
      API_URL + environment.API.API_AGENDA_ENDPOINT + '/' + doctorId
    );
  }

  getEvento(eventoId: string): Observable<AgendaResponseInterface> {
    return this.http.get<AgendaResponseInterface>(
      API_URL + environment.API.API_AGENDAR_CITA_ENDPOINT + '/' + eventoId
    );
  }
}

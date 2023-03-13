import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificacionResponseInterface } from 'src/app/interfaces/notificacion.interface';
import { environment } from 'src/environments/environment';

const API_URL = environment.API.MEDICAL_CASES_URL;

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  constructor(private http: HttpClient) {}

  getNotificaciones(userId: string): Observable<NotificacionResponseInterface> {
    return this.http.get<NotificacionResponseInterface>(
      API_URL + environment.API.API_NOTIFICACIONES_ENDPOINT + '/' + userId
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from 'src/app/interfaces/response.interface';
import { environment } from 'src/environments/environment';

const API_URL = environment.API.NOTIFICACIONES_URL;

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  constructor(private http: HttpClient) {}

  getNotificaciones(userId: string): Observable<keyof ResponseInterface> {
    return this.http.get<keyof ResponseInterface>(
      API_URL + environment.API.API_NOTIFICACIONES_ENDPOINT + '/' + userId
    );
  }
}

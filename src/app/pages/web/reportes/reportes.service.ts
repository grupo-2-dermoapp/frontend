import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteResponseInterface } from 'src/app/interfaces/reportes.interface';
import { environment } from 'src/environments/environment';

const API_URL = environment.API.AGENDA_URL;

@Injectable({
  providedIn: 'root',
})
export class ReportesService {
  constructor(private http: HttpClient) {}

  getReporte(doctorId: string): Observable<ReporteResponseInterface> {
    return this.http.get<ReporteResponseInterface>(
      API_URL + environment.API.API_REPORTES_ENDPOINT + '/' + doctorId
    );
  }
}

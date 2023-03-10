import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from 'src/app/interfaces/response.interface';
import { environment } from 'src/environments/environment';

const API_URL = environment.API.REPORTES_URL;

@Injectable({
  providedIn: 'root',
})
export class ReportesService {
  constructor(private http: HttpClient) {}

  getReporte(): Observable<keyof ResponseInterface> {
    return this.http.get<keyof ResponseInterface>(
      API_URL + environment.API.API_REPORTES_ENDPOINT
    );
  }
}

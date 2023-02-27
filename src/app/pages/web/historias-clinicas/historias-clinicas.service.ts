import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoriasClinicasResponseInterface } from 'src/app/interfaces/paciente.interface';
import { environment } from 'src/environments/environment';

const API_HISTORIAS_CLINICAS_URL = environment.API.AUTH_API_URL+environment.API.API_HISTORIAS_CLINICAS_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class HistoriasClinicasService {


  constructor(private http: HttpClient) { }

  getHistoriasClinicas():Observable<HistoriasClinicasResponseInterface> {
    return this.http.get<HistoriasClinicasResponseInterface>(API_HISTORIAS_CLINICAS_URL);
  }
}

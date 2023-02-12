import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaBackendInterface } from 'src/app/interfaces/consulta.interface';
import { environment } from 'src/environments/environment';


const API_AUTH_URL = environment.API.MEDICAL_CASES_URL + environment.API.API_CASOS_MEDICOS_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class CrearConsultaService {

  constructor(private http: HttpClient) { }

  crearConsulta(consulta:ConsultaBackendInterface):Observable<any>{
    console.log('Crear consulta',API_AUTH_URL,JSON.stringify(consulta))
    return this.http.post<any>(API_AUTH_URL,consulta);
  }
}

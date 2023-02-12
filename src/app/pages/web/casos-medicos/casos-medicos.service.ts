import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const API_AUTH_URL = environment.API.AUTH_API_URL + environment.API.API_CASOS_MEDICOS_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class CasosMedicosService {

  constructor(private http: HttpClient) { }

  obtenerCasosMedicos(medicoId:string):Observable<any>{
    return this.http.post<any>(API_AUTH_URL,{doctorId:medicoId});
  }
}

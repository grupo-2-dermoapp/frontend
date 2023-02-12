import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CasosMedicoResponseInterface } from 'src/app/interfaces/casos-medicos.interface';
import { environment } from 'src/environments/environment';


const API_AUTH_URL = environment.API.API_URL + environment.API.API_CASOS_MEDICOS_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class CasosMedicosService {

  constructor(private http: HttpClient) { }

  obtenerCasosMedicos():Observable<CasosMedicoResponseInterface>{
    return this.http.get<CasosMedicoResponseInterface>(API_AUTH_URL);
  }
}

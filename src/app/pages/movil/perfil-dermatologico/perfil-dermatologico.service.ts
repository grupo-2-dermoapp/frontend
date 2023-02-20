import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilDermatologicoBackendInterface } from 'src/app/interfaces/perfil-dermatologico.interface';
import { environment } from 'src/environments/environment';


const API_AUTH_URL = environment.API.AUTH_API_URL + environment.API.API_PERFIL_DERMATOLOGICO_ENDPOINT;
@Injectable({
  providedIn: 'root'
})
export class PerfilDermatologicoService {

  constructor(private http: HttpClient) { }

  registrarPerfil(perfilDematologico:PerfilDermatologicoBackendInterface): Observable<any> {
    console.log(perfilDematologico);
    return this.http.post<any>(API_AUTH_URL, perfilDematologico);
  }
}

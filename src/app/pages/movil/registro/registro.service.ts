import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroUsuarioBackendInterface } from 'src/app/interfaces/registro-usuario.interface';
import { environment } from 'src/environments/environment';

const API_AUTH_URL =
  environment.API.AUTH_API_URL + environment.API.API_REGISTRO_USUARIO_ENDPOINT;

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  constructor(private http: HttpClient) {}

  registro(registroUsuario: RegistroUsuarioBackendInterface): Observable<any> {
    console.log('Registrousuario', registroUsuario);
    return this.http.post<any>(API_AUTH_URL, registroUsuario);
  }
}

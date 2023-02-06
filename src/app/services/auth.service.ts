import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppService } from '../config/app.service';
import { LoginUsuarioInterface } from '../interfaces/login-usuario.interface';


const API_AUTH_URL = environment.API.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private appService:AppService) {

   }

  login(loginData:LoginUsuarioInterface): Observable<any> {
    let endPoint = this.appService.isPhone ? environment.API.API_LOGIN_USUARIO_ENDPOINT : environment.API.API_LOGIN_MEDICO_ENDPOINT
    return this.http.post<any>(API_AUTH_URL+endPoint, loginData);
  }
}

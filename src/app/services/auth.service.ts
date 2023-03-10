import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppService } from '../config/app.service';
import { LoginUsuarioInterface } from '../interfaces/login-usuario.interface';
import { PacienteFrontendInterface } from '../interfaces/paciente.interface';
import { UserInterface } from '../interfaces/user.interface';

const API_AUTH_URL = environment.API.AUTH_API_URL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: UserInterface;
  pushNotificationToken: string = '';

  constructor(private http: HttpClient, private appService: AppService) {
    let userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    } else {
      this.user = {
        email: '',
        names: '',
        uuid: '',
      };
    }
  }

  login(loginData: LoginUsuarioInterface): Observable<any> {
    let endPoint = this.appService.isPhone
      ? environment.API.API_LOGIN_USUARIO_ENDPOINT
      : environment.API.API_LOGIN_MEDICO_ENDPOINT;
    return this.http.post<any>(API_AUTH_URL + endPoint, loginData);
  }

  setUser(user: UserInterface) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  setPaciente(paciente: PacienteFrontendInterface) {
    localStorage.setItem(paciente.uuid, JSON.stringify(paciente));
  }

  getPaciente(pacienteId: string): PacienteFrontendInterface | null {
    let paciente = localStorage.getItem(pacienteId);
    return paciente ? JSON.parse(paciente) : null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppService } from '../config/app.service';
import { LoginUsuarioInterface } from '../interfaces/login-usuario.interface';
import { UserInterface } from '../interfaces/user.interface';


const API_AUTH_URL = environment.API.AUTH_API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:UserInterface;

  constructor(private http: HttpClient,private appService:AppService) {
    let userString = localStorage.getItem('user');
    if (userString){
      this.user = JSON.parse(userString);
    }else {
      this.user= {
        email:"",
        names:"",
        user_id:""
      };
    }
   }

  login(loginData:LoginUsuarioInterface): Observable<any> {
    let endPoint = this.appService.isPhone ? environment.API.API_LOGIN_USUARIO_ENDPOINT : environment.API.API_LOGIN_MEDICO_ENDPOINT
    return this.http.post<any>(API_AUTH_URL+endPoint, loginData);
  }

  setUser(user:UserInterface){
    this.user=user;
    localStorage.setItem('user',JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem('user');
  }
}

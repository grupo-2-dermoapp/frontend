import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppService } from '../config/app.service';
import { CasosMedicosTableInterface } from '../interfaces/casos-medicos.interface';
import { LoginUsuarioInterface } from '../interfaces/login-usuario.interface';
import { UserInterface } from '../interfaces/user.interface';


const API_AUTH_URL = environment.API.API_URL;

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

  setCasoMedico(casoMedico:CasosMedicosTableInterface){
    localStorage.setItem(casoMedico.casoMedicoId,JSON.stringify(casoMedico));
  }

  getCasoMedico(casoMedicoId:string):CasosMedicosTableInterface | null{
    let casoMedico =localStorage.getItem(casoMedicoId)
    if(casoMedico){
      return JSON.parse(casoMedico)
    }else {
      return null
    }
  }

  logout(){
    localStorage.removeItem('user');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegistroMedicoFormInterface } from 'src/app/interfaces/registro-medico.interface';

const API_AUTH_URL = environment.API.API_URL + environment.API.API_REGISTRO_MEDICO_ENDPOINT;


@Injectable({
  providedIn: 'root'
})
export class RegistroMedicoService {

  constructor(private http: HttpClient) { }

  registro(registerData:RegistroMedicoFormInterface,file:File):Observable<any> {
    const form = new FormData();
    console.log(registerData);
    console.log(file)
    form.append("medical_license", file);
    form.append("email", registerData.email);
    form.append("names", registerData.nombre);
    form.append("nationality", registerData.nacionalidad);
    form.append("speciality", registerData.especialidad);
    form.append("password", registerData.password);
    console.log(JSON.stringify(form));

    return this.http.post<any>(API_AUTH_URL, form);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_AUTH_URL = environment.API.AUTH_API_URL;

@Injectable({
  providedIn: 'root'
})
export class DetalleConsultaService {

  constructor(private http: HttpClient) { }

  seleccionarCasoMedico(casoMedicoID:any,medicoId:string):Observable<any>{
    return this.http.post<any>(API_AUTH_URL + environment.API.API_SELECCIONAR_CASO_MEDICO_ENDPOINT, {medicalCase:casoMedicoID,doctorId:medicoId});
  }

  crearDiagnostico(diagnostico:any):Observable<any>{
    return this.http.post<any>(API_AUTH_URL + environment.API.API_CREAR_DIAGNOSTICO_ENDPOINT, diagnostico);
  }
}

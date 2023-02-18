import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { LoginUsuarioInterface } from '../interfaces/login-usuario.interface';
import { AppService } from '../config/app.service';
import { UserInterface } from '../interfaces/user.interface';
import { CasosMedicosTableInterface } from '../interfaces/casos-medicos.interface';

describe('AuthService', () => {

  const API_AUTH_URL = environment.API.AUTH_API_URL;
  let service: AuthService;
  let appService: AppService;
  let httpMock: HttpTestingController;
  let isPhoneMock: any;

  const medicalCaseMock: CasosMedicosTableInterface = {
    casoMedicoId:'uuid-medical-case',
    tipoDeDiagnostico: 'test diagnostico',
    tipoLesion: {
      id: 'id-lesion',
      value: 'value-lesion'
    },
    formaLesion: {
      id: 'id-forma',
      value: 'value-forma'
    },
    numeroLesiones: {
      id: 'id-numero-lesiones',
      value: 'value-numero-lesiones'
    },
    distribucion: {
      id: 'id-distribucion',
      value: 'value-distribucion'
    },
    parteDelCuerpo: 'uuid-test',
    paciente: {
      nombre: 'nombre-paciente',
    }
  };

  const userMock: UserInterface = {
    email:'test@test.com',
    names: 'test user',
    uuid: 'uuid-test'
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, AppService]
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    appService = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Checking http Method Login for website', () => {

    appService.isPhone = false;
    const urlAPI = API_AUTH_URL + environment.API.API_LOGIN_MEDICO_ENDPOINT;

    const loginData: LoginUsuarioInterface = {
      email:'',
      password: ''
    };

    const fakeResponse = {
      code: "1100",
      message: "Login correcto",
      user: {
          email: "joreg@algow.com",
          names: "jorge",
          surnames: "patient"
      }
    }

    service.login(loginData).subscribe(resLogin => {
      expect(resLogin).toEqual(fakeResponse);
    });

    const req = httpMock.expectOne(`${urlAPI}`);
    expect(req.request.method).toBe("POST");
    req.flush(fakeResponse);
  });

  it('Checking http Method Login for mobile', () => {

    appService.isPhone = true;
    const urlAPI = API_AUTH_URL + environment.API.API_LOGIN_USUARIO_ENDPOINT;

    const loginData: LoginUsuarioInterface = {
      email:'',
      password: ''
    };

    const fakeResponse = {
      code: "1100",
      message: "Login correcto",
      user: {
          email: "joreg@algow.com",
          names: "jorge",
          surnames: "patient"
      }
    }

    service.login(loginData).subscribe(resLogin => {
      expect(resLogin).toEqual(fakeResponse);
    });

    const req = httpMock.expectOne(`${urlAPI}`);
    expect(req.request.method).toBe("POST");
    req.flush(fakeResponse);
  });

  it('should set a user on local storage', () => {

    localStorage.removeItem('user');
    service.setUser(userMock);
    const userStored = JSON.parse(localStorage.getItem('user') as string);
    expect(userStored.email).toBe(userMock.email);
    expect(userStored.names).toBe(userMock.names);
    expect(userStored.uuid).toBe(userMock.uuid);
  });

  it('should set a medical case on local storage', () => {

    localStorage.removeItem(medicalCaseMock.casoMedicoId);
    service.setCasoMedico(medicalCaseMock);

    const medicalCaseStored: CasosMedicosTableInterface = JSON.parse(localStorage.getItem(medicalCaseMock.casoMedicoId) as string);
    expect(medicalCaseStored.casoMedicoId).toBe(medicalCaseMock.casoMedicoId);
    expect(medicalCaseStored.tipoDeDiagnostico).toBe(medicalCaseMock.tipoDeDiagnostico);
    expect(medicalCaseStored.tipoLesion?.id).toBe(medicalCaseMock.tipoLesion?.id);
    expect(medicalCaseStored.formaLesion?.id).toBe(medicalCaseMock.formaLesion?.id);
    expect(medicalCaseStored.numeroLesiones?.id).toBe(medicalCaseMock.numeroLesiones?.id);
    expect(medicalCaseStored.distribucion?.id).toBe(medicalCaseMock.distribucion?.id);
    expect(medicalCaseStored.parteDelCuerpo).toBe(medicalCaseMock.parteDelCuerpo);
    expect(medicalCaseStored.paciente.nombre).toBe(medicalCaseMock.paciente.nombre);

  });

  it('should get a medical case from local storage', () => {

    localStorage.setItem(medicalCaseMock.casoMedicoId, JSON.stringify(medicalCaseMock));
    let medicalCaseLoaded: CasosMedicosTableInterface | null = service.getCasoMedico(medicalCaseMock.casoMedicoId);

    expect(medicalCaseLoaded?.casoMedicoId).toBe(medicalCaseMock.casoMedicoId);
    expect(medicalCaseLoaded?.tipoDeDiagnostico).toBe(medicalCaseMock.tipoDeDiagnostico);
    expect(medicalCaseLoaded?.tipoLesion?.id).toBe(medicalCaseMock.tipoLesion?.id);
    expect(medicalCaseLoaded?.formaLesion?.id).toBe(medicalCaseMock.formaLesion?.id);
    expect(medicalCaseLoaded?.numeroLesiones?.id).toBe(medicalCaseMock.numeroLesiones?.id);
    expect(medicalCaseLoaded?.distribucion?.id).toBe(medicalCaseMock.distribucion?.id);
    expect(medicalCaseLoaded?.parteDelCuerpo).toBe(medicalCaseMock.parteDelCuerpo);
    expect(medicalCaseLoaded?.paciente.nombre).toBe(medicalCaseMock.paciente.nombre);
  });

  it('should delete user after logout', () => {

    localStorage.setItem('user', JSON.stringify(userMock));
    service.logout();
    const userStored = JSON.parse(localStorage.getItem('user') as string);
    expect(userStored).toBeNull();
  });

});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { LoginUsuarioInterface } from '../interfaces/login-usuario.interface';
import { AppService } from '../config/app.service';

describe('AuthService', () => {

  const API_AUTH_URL = environment.API.AUTH_API_URL;
  let service: AuthService;
  let appService: AppService;
  let httpMock: HttpTestingController;
  let isPhoneMock: any;

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

});

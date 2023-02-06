import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {

  const API_AUTH_URL = environment.API.API_URL + environment.API.API_AUTH_ENDPOINT;
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Checking http Method Login', () => {
    const payload = [
      {
         email: 'test.test.com',
         password: 'test password'
      }
    ];

    const fakeResponse = {
      code: "1100",
      message: "Login correcto",
      user: {
          email: "joreg@algow.com",
          names: "jorge",
          surnames: "patient"
      }
    }

    service.login(payload).subscribe(loginData => {
      expect(loginData).toEqual(fakeResponse);
    });

    const req = httpMock.expectOne(`${API_AUTH_URL}`);
    expect(req.request.method).toBe("POST");
    req.flush(fakeResponse);
  });

});

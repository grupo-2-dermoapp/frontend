import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RegistroUsuarioBackendInterface } from 'src/app/interfaces/registro-usuario.interface';
import { environment } from 'src/environments/environment';

import { RegistroService } from './registro.service';

describe('RegistroService', () => {
  let service: RegistroService;
  let httpMock: HttpTestingController;
  const API_REGISTRO_USUARIO_ENDPOINT =
    environment.API.AUTH_API_URL +
    environment.API.API_REGISTRO_USUARIO_ENDPOINT;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RegistroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Create new patient', () => {
    const user: RegistroUsuarioBackendInterface = {
      email: '',
      names: '',
      password: '',
      age: 0,
      location: '',
      dermatological_profile_uuid: '',
      notification_token: '',
    };

    service.registro(user).subscribe();

    const req = httpMock.expectOne(`${API_REGISTRO_USUARIO_ENDPOINT}`);
    expect(req.request.method).toBe('POST');
    req.flush('');
  });
});

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RegistroMedicoFormInterface } from 'src/app/interfaces/registro-medico.interface';
import { environment } from 'src/environments/environment';

import { RegistroMedicoService } from './registro-medico.service';

describe('RegistroMedicoService', () => {

  let service: RegistroMedicoService;
  let httpMock: HttpTestingController;
  const API_REGISTRO_MEDICO_ENDPOINT = environment.API.API_URL + environment.API.API_REGISTRO_MEDICO_ENDPOINT;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegistroMedicoService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Create new doctor', () => {
    const user: RegistroMedicoFormInterface = {
      nombre: '',
      email: '',
      nacionalidad: '',
      especialidad: '',
      licenciaMedica: '',
      password: '',
      passwordConfirmation: ''
    }

    let file = new File([], 'test-file')
    service.registro(user, file).subscribe();

    const req = httpMock.expectOne(`${API_REGISTRO_MEDICO_ENDPOINT}`);
    expect(req.request.method).toBe("POST");
    req.flush('');
  });
});

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { DetalleConsultaService } from './detalle-consulta.service';

describe('DetalleConsultaService', () => {
  let service: DetalleConsultaService;
  let httpMock: HttpTestingController;
  const API_CREAR_DIAGNOSTICO_ENDPOINT =
    environment.API.MEDICAL_CASES_URL +
    environment.API.API_DIAGNOSTICO_ENDPOINT;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DetalleConsultaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should POST create diagnosis', () => {
    const diagnosis = {
      name_of_injury: 'name_of_injury test',
      diagnosis: 'diagnosis test',
      treatment: 'treatment test',
      medical_case_uuid: 'medical_case_uuid test',
      doctor_uuid: 'doctor_uuid test',
    };

    service.crearDiagnostico(diagnosis).subscribe();

    const req = httpMock.expectOne(`${API_CREAR_DIAGNOSTICO_ENDPOINT}`);
    expect(req.request.method).toBe('POST');
    req.flush('');
  });
});

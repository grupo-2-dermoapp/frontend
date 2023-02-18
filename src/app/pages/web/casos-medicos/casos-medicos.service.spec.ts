import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { CasosMedicosService } from './casos-medicos.service';

describe('CasosMedicosService', () => {
  let service: CasosMedicosService;
  let httpMock: HttpTestingController;
  const API_CASOS_MEDICOS_ENDPOINT = environment.API.MEDICAL_CASES_URL + environment.API.API_CASOS_MEDICOS_ENDPOINT;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CasosMedicosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get medical cases', () => {
    service.obtenerCasosMedicos().subscribe();

    const req = httpMock.expectOne(`${API_CASOS_MEDICOS_ENDPOINT}`);
    expect(req.request.method).toBe("GET");
    req.flush('');
  });


});

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ConsultaBackendInterface } from 'src/app/interfaces/consulta.interface';
import { environment } from 'src/environments/environment';

import { CrearConsultaService } from './crear-consulta.service';

describe('CrearConsultaService', () => {
  let service: CrearConsultaService;
  let httpMock: HttpTestingController;
  const API_CASOS_MEDICOS_ENDPOINT = environment.API.MEDICAL_CASES_URL + environment.API.API_CASOS_MEDICOS_ENDPOINT;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CrearConsultaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create new consult', () => {
    const consultMock: ConsultaBackendInterface = {
      type_of_injury: 'type_of_injury test',
      shape_of_injury: 'shape_of_injury test',
      number_of_injuries: 'number_of_injuries test',
      injury_distribucion: 'injury_distribucion test',
      body_part: 'body_part test',
      patient_uuid: 'patient_uuid test',
      type_of_diagnosis: 'type_of_diagnosis test'
    }

    service.crearConsulta(consultMock).subscribe();

    const req = httpMock.expectOne(`${API_CASOS_MEDICOS_ENDPOINT}`);
    expect(req.request.method).toBe("POST");
    req.flush('');
  });

});
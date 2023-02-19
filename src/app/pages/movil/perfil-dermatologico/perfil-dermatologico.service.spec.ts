import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PerfilDermatologicoService } from './perfil-dermatologico.service';
import { PerfilDermatologicoBackendInterface } from 'src/app/interfaces/perfil-dermatologico.interface';
import { environment } from 'src/environments/environment';

describe('PerfilDermatologicoService', () => {
  let service: PerfilDermatologicoService;
  let httpMock: HttpTestingController;
  const API_PERFIL_DERMATOLOGICO_ENDPOINT = environment.API.AUTH_API_URL + environment.API.API_PERFIL_DERMATOLOGICO_ENDPOINT;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PerfilDermatologicoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register dermatological profile', () => {
    const dermatologicalProfileMock: PerfilDermatologicoBackendInterface = {
      eyes_color: 'eyes_color test',
      hair_color: 'hair_color test',
      skin_color: 'skin_color test',
      freckles: 'freckles test',
      skin_stay_in_the_sun: 'skin_stay_in_the_sun test',
      turn_brown: 'turn_brown test',
      how_brown: 'how_brown test',
      face_sensitive: 'face_sensitive test',
      how_often_tan: 'how_often_tan test',
      artificial_time_expose: 'artificial_time_expose test',
    }

    service.registrarPerfil(dermatologicalProfileMock).subscribe();

    const req = httpMock.expectOne(`${API_PERFIL_DERMATOLOGICO_ENDPOINT}`);
    expect(req.request.method).toBe("POST");
    req.flush('');
  });

});
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RegistroMedicoService } from './registro-medico.service';

describe('RegistroMedicoService', () => {
  let service: RegistroMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegistroMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Create new doctor', () => {
    // Posiblemente se debe emular el servicio http
    // Tambien se debe definir el modelo de datos del user (Tomado temporalmente del form del componente)
    const user = {
      nombre: '',
      email: '',
      nacionalidad: '',
      especialidad: '',
      licenciaMedica: '',
      password: '',
      passwordConfirmation: ''
    }
    // service.registro(user).subscribe({
    //   next: (response) => {
    //     // Se debe cambiar la validacion cuando se defina la respuesta del servicio
    //     expect(response).toBe('');
    //   }
    // })
  });
});

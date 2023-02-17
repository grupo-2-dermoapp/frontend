import { TestBed } from '@angular/core/testing';
import { Platform } from '@ionic/angular';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let platformMock: any;

  beforeEach(() => {
    platformMock = jasmine.createSpyObj(['is']);
    platformMock.is.and.returnValue(true);

    TestBed.configureTestingModule({
      providers:[
      ]
    });
    TestBed.overrideProvider(Platform, {useValue: platformMock});

  });

  it('should be created', () => {
    service = TestBed.inject(AppService);
    expect(service).toBeTruthy();
  });

  it('should configure platform for mobile', () => {
    service = TestBed.inject(AppService);
    expect(service.isPhone).toBeTrue();
  });

  it('should configure platform for Web', () => {
    platformMock.is.and.returnValue(false);
    TestBed.overrideProvider(Platform, {useValue: platformMock});
    service = TestBed.inject(AppService);
    expect(service.isPhone).toBeFalse();
  });

  it('should get all models data', () => {
    service = TestBed.inject(AppService);
    expect(service.fitzpatrick).toBeTruthy();
    expect(service.consulta).toBeTruthy();
    expect(service.partesCuerpo).toBeTruthy();
    expect(service.fitzpatrick).toBeTruthy();
  });


  it('should get consulta model data by ID', () => {
    service = TestBed.inject(AppService);
    const nombreConsulta = 'formasDeLesiones';
    const idConsulta = 'ROLLED_UP';
    const consultaLoaded = service.obtenerConsultaPorId(nombreConsulta, idConsulta);
    expect(consultaLoaded?.id).toEqual(idConsulta);
  });

  it('should get ParteCuerpo model data by ID', () => {
    service = TestBed.inject(AppService);
    const idParteCuerpo = 'LEFT_EYE';
    const parteCuerpoLoaded = service.obtenerParteCuerpoPorId(idParteCuerpo);
    // Si cambia el modelo de datos hay que ajustar el test
    expect(parteCuerpoLoaded).toEqual('Ojo izquierdo');
  });

});

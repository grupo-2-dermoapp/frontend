import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { CasosMedicosPage } from './casos-medicos.page';
import { CasosMedicosService } from './casos-medicos.service';
import { CasosMedicosInterface, CasosMedicosTableInterface } from 'src/app/interfaces/casos-medicos.interface';

describe('CasosMedicosPage', () => {
  let component: CasosMedicosPage;
  let fixture: ComponentFixture<CasosMedicosPage>;

  let alertControllerMock: any;
  let alertMock: any;
  let loadingControllerMock;
  let loadingMock: any;
  let routerMock: any;
  let casosMedicosServiceMock: any;
  let authServiceMock: any;

  const medicalCaseMock: CasosMedicosInterface = {
    uuid: 'uuid test',
    type_of_diagnosis: 'type test',
    number_of_injuries: 'number test',
    injury_distribucion: 'injury test',
    shape_of_injury: 'shape test',
    body_part: 'body test',
    type_of_injury: 'type test',
    patient: {
      names: 'name test'
    }
  }

  const medicalCaseTableMock: CasosMedicosTableInterface = {
    casoMedicoId:'uuid-medical-case',
    tipoDeDiagnostico: 'test diagnostico',
    tipoLesion: {
      id: 'id-lesion',
      value: 'value-lesion'
    },
    formaLesion: {
      id: 'id-forma',
      value: 'value-forma'
    },
    numeroLesiones: {
      id: 'id-numero-lesiones',
      value: 'value-numero-lesiones'
    },
    distribucion: {
      id: 'id-distribucion',
      value: 'value-distribucion'
    },
    parteDelCuerpo: 'uuid-test',
    paciente: {
      nombre: 'nombre-paciente',
    }
  };

  beforeEach(waitForAsync(() => {
    // Mocks de servicios
    loadingMock = jasmine.createSpyObj(['present', 'dismiss']);
    loadingMock.present.and.returnValue(Promise.resolve());
    loadingMock.dismiss.and.returnValue(Promise.resolve());

    loadingControllerMock = jasmine.createSpyObj(['create', 'present']);
    loadingControllerMock.create.and.returnValue(Promise.resolve(loadingMock));

    alertMock = jasmine.createSpyObj(['present', 'dismiss']);
    alertMock.present.and.returnValue(Promise.resolve());
    alertMock.dismiss.and.returnValue(Promise.resolve());

    alertControllerMock = jasmine.createSpyObj(['create', 'present']);
    alertControllerMock.create.and.returnValue(Promise.resolve(alertMock));

    casosMedicosServiceMock = jasmine.createSpyObj(['obtenerCasosMedicos']);
    casosMedicosServiceMock.obtenerCasosMedicos.and.returnValue(of(
      { medical_cases: [medicalCaseMock] }
    ));

    authServiceMock = jasmine.createSpyObj(['obtenerCasosMedicos', 'setCasoMedico']);

    routerMock = jasmine.createSpyObj(['navigateByUrl', 'navigate']);

    TestBed.configureTestingModule({
      declarations: [ CasosMedicosPage ],
      imports: [IonicModule.forRoot(),TranslateModule.forRoot()],
      providers: [
        FormBuilder,
        { provide: LoadingController, useValue: loadingControllerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: Router, useValue: routerMock },
        { provide: CasosMedicosService, useValue: casosMedicosServiceMock },
        { provide: AuthService, useValue: authServiceMock },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(CasosMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should obtain medical cases correctly', () => {

    expect(casosMedicosServiceMock.obtenerCasosMedicos).toHaveBeenCalled();

  });

  it('should go to case details', () => {

    component.verDetalleCasoMedico(medicalCaseTableMock);
    expect(routerMock.navigate).toHaveBeenCalled();
  });
});

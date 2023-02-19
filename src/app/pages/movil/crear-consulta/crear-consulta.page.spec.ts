import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule, LoadingController, ModalController } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { CrearConsultaPage } from './crear-consulta.page';
import { CrearConsultaService } from './crear-consulta.service';

describe('CrearConsultaPage', () => {
  let component: CrearConsultaPage;
  let fixture: ComponentFixture<CrearConsultaPage>;

  let alertControllerMock: any;
  let alertMock: any;
  let loadingControllerMock;
  let loadingMock: any;
  let modalControllerMock: any;
  let modalMock: any;
  let crearConsultaServiceMock: any;
  let authServiceMock: any;
  let routerMock: any;

  beforeEach(waitForAsync(() => {
    // Mocks de servicios
    loadingMock = jasmine.createSpyObj(['present', 'dismiss']);
    loadingMock.present.and.returnValue(Promise.resolve());
    loadingMock.dismiss.and.returnValue(Promise.resolve());

    loadingControllerMock = jasmine.createSpyObj(['create', 'present']);
    loadingControllerMock.create.and.returnValue(Promise.resolve(loadingMock));

    alertMock = jasmine.createSpyObj(['present', 'dismiss', 'onDidDismiss']);
    alertMock.present.and.returnValue(Promise.resolve());
    alertMock.dismiss.and.returnValue(Promise.resolve());
    alertMock.onDidDismiss.and.returnValue(Promise.resolve({
      data: ''
    }));

    alertControllerMock = jasmine.createSpyObj(['create', 'present']);
    alertControllerMock.create.and.returnValue(Promise.resolve(alertMock));

    modalMock = jasmine.createSpyObj(['present', 'dismiss', 'onWillDismiss']);
    modalMock.present.and.returnValue(Promise.resolve());
    modalMock.dismiss.and.returnValue(Promise.resolve());
    modalMock.onWillDismiss.and.returnValue(Promise.resolve());

    modalControllerMock = jasmine.createSpyObj(['create', 'present']);
    modalControllerMock.create.and.returnValue(Promise.resolve(modalMock));

    crearConsultaServiceMock = jasmine.createSpyObj(['crearConsulta']);
    authServiceMock = jasmine.createSpyObj(['registro'], {'user': {uuid: 'uuid-test'}});

    routerMock = jasmine.createSpyObj(['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [ CrearConsultaPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        FormBuilder,
        { provide: LoadingController, useValue: loadingControllerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ModalController, useValue: modalControllerMock },
        { provide: Router, useValue: routerMock },
        { provide: CrearConsultaService, useValue: crearConsultaServiceMock },
        { provide: AuthService, useValue: authServiceMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform data to DTO for Backend', () => {
    const consultMock = {
      tipoLesion: 'tipoLesion test',
      formaLesion: 'formaLesion test',
      numeroLesiones: 'numeroLesiones test',
      distribucion: 'distribucion test',
      parteDelCuerpo: 'parteDelCuerpo test',
      parteDelCuerpoId: 'parteDelCuerpoId test'
    }
    const diagnosisType = 'diagnosisType test';
    const consultBackendLoaded = component.transformarParaBackend(consultMock, diagnosisType)

    expect(consultBackendLoaded.body_part).toEqual(consultMock.parteDelCuerpoId);
    expect(consultBackendLoaded.injury_distribucion).toEqual(consultMock.distribucion);
    expect(consultBackendLoaded.number_of_injuries).toEqual(consultMock.numeroLesiones);
    expect(consultBackendLoaded.shape_of_injury).toEqual(consultMock.formaLesion);
    expect(consultBackendLoaded.type_of_diagnosis).toEqual(diagnosisType);
    expect(consultBackendLoaded.type_of_injury).toEqual(consultMock.tipoLesion);
    expect(consultBackendLoaded.patient_uuid).toEqual(authServiceMock.user.uuid);

  });

  it('should select body part', async () => {

    modalMock.onWillDismiss.and.returnValue(Promise.resolve(
      {
        role: 'escoger',
        data: {
          id: 'id-test',
          value: 'value-test'
        }
      }
    ));
    await component.escogerParteDelCuerpo();

    expect(component.consulta.controls['parteDelCuerpo'].value).toEqual('value-test');
    expect(component.consulta.controls['parteDelCuerpoId'].value).toEqual('id-test');

  });

  it('should mark form on invalid form', async () => {

    spyOn(component.consulta, 'get');
    await component.crearConsulta();

    expect(component.consulta.get).toHaveBeenCalled()

  });

  it('should create consult on valid form', fakeAsync(async () => {
    component.consulta.setValue({
      tipoLesion: 'tipoLesion test',
      formaLesion: 'formaLesion test',
      numeroLesiones: 'numeroLesiones test',
      distribucion: 'distribucion test',
      parteDelCuerpo: 'parteDelCuerpo test',
      parteDelCuerpoId: 'parteDelCuerpoId test',
    })

    crearConsultaServiceMock.crearConsulta.and.returnValue(of(true));
    await component.crearConsulta();
    tick();
    expect(routerMock.navigateByUrl).toHaveBeenCalled();
  }));

  it('should show alert on service error at creating consult', fakeAsync(async () => {

    component.consulta.setValue({
      tipoLesion: 'tipoLesion test',
      formaLesion: 'formaLesion test',
      numeroLesiones: 'numeroLesiones test',
      distribucion: 'distribucion test',
      parteDelCuerpo: 'parteDelCuerpo test',
      parteDelCuerpoId: 'parteDelCuerpoId test',
    })

    crearConsultaServiceMock.crearConsulta.and.returnValue(
      throwError(() => {
        return {
          error: {
            error: ''
          }
        }
      })
    );

    await component.crearConsulta();
    tick();
    expect(alertMock.present).toHaveBeenCalled()

  }));


});
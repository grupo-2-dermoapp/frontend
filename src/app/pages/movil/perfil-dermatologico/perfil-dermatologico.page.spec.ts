import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, ModalController } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { PerfilDermatologicoFormInterface } from 'src/app/interfaces/perfil-dermatologico.interface';

import { PerfilDermatologicoPage } from './perfil-dermatologico.page';
import { PerfilDermatologicoService } from './perfil-dermatologico.service';

describe('PerfilDermatologicoPage', () => {
  let component: PerfilDermatologicoPage;
  let fixture: ComponentFixture<PerfilDermatologicoPage>;

  let alertControllerMock: any;
  let alertMock: any;
  let loadingControllerMock;
  let loadingMock: any;
  let modalControllerMock: any;
  let modalMock: any;
  let perfilDermatologicoServiceMock: any;

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

    modalMock = jasmine.createSpyObj(['present', 'dismiss', 'onWillDismiss']);
    modalMock.present.and.returnValue(Promise.resolve());
    modalMock.dismiss.and.returnValue(Promise.resolve());
    modalMock.onWillDismiss.and.returnValue(Promise.resolve());

    modalControllerMock = jasmine.createSpyObj(['create', 'present',  'dismiss']);
    modalControllerMock.create.and.returnValue(Promise.resolve(modalMock));
    modalControllerMock.dismiss.and.returnValue(Promise.resolve());

    perfilDermatologicoServiceMock = jasmine.createSpyObj(['registrarPerfil']);

    TestBed.configureTestingModule({
      declarations: [ PerfilDermatologicoPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        FormBuilder,
        { provide: LoadingController, useValue: loadingControllerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ModalController, useValue: modalControllerMock },
        { provide: PerfilDermatologicoService, useValue: perfilDermatologicoServiceMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilDermatologicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform data to DTO Backend', async() => {
    let data: PerfilDermatologicoFormInterface = {
      colorOjos: 'colorOjos test',
      colorCabello: 'colorCabello test',
      colorPiel: 'colorPiel test',
      cantidadPecas: 'cantidadPecas test',
      exposicionAlSol: 'exposicionAlSol test',
      bronceadoConElSol: 'bronceadoConElSol test',
      cantidadBronceado: 'cantidadBronceado test',
      sensibilidadDeCaraConSol: 'sensibilidadDeCaraConSol test',
      frecuenciaBronceo: 'frecuenciaBronceo test',
      ultimaExposicion: 'ultimaExposicion test'
    };
    let backendDTO = component.transformarParaBackend(data);
    expect(backendDTO.eyes_color).toBe(data.colorOjos);
    expect(backendDTO.hair_color).toBe(data.colorCabello);
    expect(backendDTO.skin_color).toBe(data.colorPiel);
    expect(backendDTO.freckles).toBe(data.cantidadPecas);
    expect(backendDTO.skin_stay_in_the_sun).toBe(data.exposicionAlSol);
    expect(backendDTO.turn_brown).toBe(data.bronceadoConElSol);
    expect(backendDTO.how_brown).toBe(data.cantidadBronceado);
    expect(backendDTO.face_sensitive).toBe(data.sensibilidadDeCaraConSol);
    expect(backendDTO.how_often_tan).toBe(data.frecuenciaBronceo);
    expect(backendDTO.artificial_time_expose).toBe(data.ultimaExposicion);
  });

  it('should dismiss modal', async() => {
    component.cancel();
    expect(modalControllerMock.dismiss).toHaveBeenCalled();

    component.escoger('');
    expect(modalControllerMock.dismiss).toHaveBeenCalled();
  });

  it('should check dermatological profile invalid form', async() => {
    spyOn(component.perfilDermatologico, 'get');
    await component.verificar();
    expect(component.perfilDermatologico.get).toHaveBeenCalledTimes(10);
  });

  it('should check dermatological profile valid form', fakeAsync(async() => {
    component.perfilDermatologico.setValue({
      colorOjos: 'colorOjos test',
      colorCabello: 'colorCabello test',
      colorPiel: 'colorPiel test',
      cantidadPecas: 'cantidadPecas test',
      exposicionAlSol: 'exposicionAlSol test',
      bronceadoConElSol: 'bronceadoConElSol test',
      cantidadBronceado: 'cantidadBronceado test',
      sensibilidadDeCaraConSol: 'sensibilidadDeCaraConSol test',
      frecuenciaBronceo: 'frecuenciaBronceo test',
      ultimaExposicion: 'ultimaExposicion test'
    })

    perfilDermatologicoServiceMock.registrarPerfil.and.returnValue(of({
      dermatological_data:{
        uuid: 'uuid_mock'
      }
    }));

    await component.verificar();
    tick();
    // debe mostrar modal
    expect(modalControllerMock.dismiss).toHaveBeenCalled();
  }));

  it('should show alert at service error during check dermatological profile', fakeAsync(async() => {
    component.perfilDermatologico.setValue({
      colorOjos: 'colorOjos test',
      colorCabello: 'colorCabello test',
      colorPiel: 'colorPiel test',
      cantidadPecas: 'cantidadPecas test',
      exposicionAlSol: 'exposicionAlSol test',
      bronceadoConElSol: 'bronceadoConElSol test',
      cantidadBronceado: 'cantidadBronceado test',
      sensibilidadDeCaraConSol: 'sensibilidadDeCaraConSol test',
      frecuenciaBronceo: 'frecuenciaBronceo test',
      ultimaExposicion: 'ultimaExposicion test'
    })

    perfilDermatologicoServiceMock.registrarPerfil.and.returnValue(
      throwError(() => {
        return {
          error: {
            error: ''
          }
        }
      })
    );

    await component.verificar();
    tick();
    // debe mostrar alert de error
    expect(alertMock.present).toHaveBeenCalled();
  }));

});
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AlertController, IonicModule, LoadingController, ModalController } from '@ionic/angular';
import { RegistroUsuarioFormInterface } from 'src/app/interfaces/registro-usuario.interface';

import { RegistroPage } from './registro.page';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  let alertControllerMock: any;
  let alertMock: any;
  let loadingControllerMock;
  let loadingMock: any;
  let modalControllerMock: any;
  let modalMock: any;

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

    modalControllerMock = jasmine.createSpyObj(['create', 'present']);
    modalControllerMock.create.and.returnValue(Promise.resolve(modalMock));

    TestBed.configureTestingModule({
      declarations: [ RegistroPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        FormBuilder,
        { provide: LoadingController, useValue: loadingControllerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ModalController, useValue: modalControllerMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create dermatological profile', async() => {
    modalMock.onWillDismiss.and.returnValue(Promise.resolve({
      data: '',
      role: 'escoger'
    }));
    await component.crearPerfilDermatologico();
    expect(component.registro.get('validacionPerfilDematologico')?.value).toBeTrue();
  });

  it('should transform data to DTO Backend', async() => {
    let data: RegistroUsuarioFormInterface = {
      email: 'email_test',
      nombre: 'nombre_test',
      edad: 5,
      residencia: 'residencia_test',
      perfilDematologico: 'perfil_test',
      password: 'pass_test',
      passwordConfirmation: 'pass_confirmation_test',
      terminosCondiciones: true
    };
    let backendDTO = component.transformarParaBackend(data);
    expect(backendDTO.names).toBe(data.nombre);
    expect(backendDTO.age).toBe(data.edad);
    expect(backendDTO.dermatological_profile_uuid).toBe(data.perfilDematologico);
    expect(backendDTO.email).toBe(data.email);
    expect(backendDTO.location).toBe(data.residencia);
    expect(backendDTO.password).toBe(data.password);
  });

});

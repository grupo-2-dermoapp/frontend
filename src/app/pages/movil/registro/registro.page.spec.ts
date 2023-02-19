import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule, LoadingController, ModalController } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { RegistroUsuarioFormInterface } from 'src/app/interfaces/registro-usuario.interface';
import { RegistroPage } from './registro.page';
import { RegistroService } from './registro.service';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  let alertControllerMock: any;
  let alertMock: any;
  let loadingControllerMock;
  let loadingMock: any;
  let modalControllerMock: any;
  let modalMock: any;
  let registroServiceMock: any;
  let routerMock: any;

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

    registroServiceMock = jasmine.createSpyObj(['registro']);

    routerMock = jasmine.createSpyObj(['navigateByUrl']);


    TestBed.configureTestingModule({
      declarations: [ RegistroPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        FormBuilder,
        { provide: LoadingController, useValue: loadingControllerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ModalController, useValue: modalControllerMock },
        { provide: RegistroService, useValue: registroServiceMock },
        { provide: Router, useValue: routerMock },
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

  it('should return dermatological profile', async() => {
     component.registro.controls['perfilDematologico'].setValue([1, 2, 3]);
     let dermatologicalProfileLoaded: any = component.perfilDematologico;
     expect(dermatologicalProfileLoaded.value).toEqual([1,2,3]);
  });

  it('should load terms and conditions alert', async() => {
    await component.verTerminosYCondiciones();
    expect(alertMock.present).toHaveBeenCalled();
  });

  it('should stop registry on invalid form', async() => {
    await component.registrarse();
    // debe presentar la alerta de crear perfil
    expect(alertMock.present).toHaveBeenCalled();
  });

  it('should make registry on valid form', fakeAsync(async() => {
    component.registro.setValue({
      email: 'test@test.com',
      nombre: 'nombre test',
      edad: 19,
      residencia: 'residencia test',
      validacionPerfilDematologico: true,
      perfilDematologico: [1],
      password: 'password',
      passwordConfirmation: 'password',
      terminosCondiciones: true
    })

    registroServiceMock.registro.and.returnValue(of(true));
    await component.registrarse();
    tick();
    // debe navegar a login
    expect(routerMock.navigateByUrl).toHaveBeenCalled();
  }));

  it('should show alert on service error at registry', fakeAsync(async() => {
    component.registro.setValue({
      email: 'test@test.com',
      nombre: 'nombre test',
      edad: 19,
      residencia: 'residencia test',
      validacionPerfilDematologico: true,
      perfilDematologico: [1],
      password: 'password',
      passwordConfirmation: 'password',
      terminosCondiciones: true
    })

    registroServiceMock.registro.and.returnValue(
      throwError(() => {
        return {
          error: {
            error: ''
          }
        }
      })
    );
    await component.registrarse();
    tick();
    // debe mostrar alerta
    expect(alertMock.present).toHaveBeenCalled();
  }));

});
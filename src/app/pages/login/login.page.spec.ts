import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { LoginPage } from './login.page';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let loadingControllerMock: any;
  let loadingMock: any;
  let alertControllerMock: any;
  let alertControllerSpy: AlertController;
  let alertMock: any;
  let authServiceMock: any;
  let authService: AuthService;
  let routerMock: any;
  let router: Router;

  beforeEach(waitForAsync(() => {

    // Mocks de servicios
    loadingMock = jasmine.createSpyObj(['present', 'dismiss']);
    loadingMock.present.and.returnValue(Promise.resolve());
    loadingMock.dismiss.and.returnValue(Promise.resolve());

    loadingControllerMock = jasmine.createSpyObj(['create', 'present']);

    alertMock = jasmine.createSpyObj(['present', 'dismiss']);
    alertMock.present.and.returnValue(Promise.resolve());
    alertMock.dismiss.and.returnValue(Promise.resolve());

    alertControllerMock = jasmine.createSpyObj('AlertControllerSpy', ['create', 'present']);

    authServiceMock = jasmine.createSpyObj(['login']);

    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        FormBuilder,
        { provide: LoadingController, useValue: loadingControllerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: AuthService, useValue: authServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();

  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should pass the login with valid credentials', async() => {

    // Configurar Spies
    loadingControllerMock.create.and.returnValue(Promise.resolve(loadingMock));
    authServiceMock.login.and.returnValue(of('Mock Data Login'));

    const credentials = {
      email: 'Test@test.com',
      password: '123456'
    }

    component.credentials.setValue(credentials);

    spyOn(router, 'navigateByUrl');
    await component.login();
    expect(router.navigateByUrl).toHaveBeenCalled();

  });

  it('Should reject login with wrong credentials', async() => {

    // Configurar Spies
    loadingControllerMock.create.and.returnValue(Promise.resolve(loadingMock));
    alertControllerMock.create.and.returnValue(Promise.resolve(alertMock));
    authServiceMock.login.and.returnValue(throwError(() => {
      return {
        error: {
          error: ''
        }
      }
    }));

    const credentials = {
      email: 'Test@test.com',
      password: '123456'
    }

    component.credentials.setValue(credentials);

    await component.login();
    expect(alertControllerMock.create).toHaveBeenCalled();
  });

  it('Should reject empty login form', async() => {

    // Configurar Spies
    spyOn(component.credentials, 'get');
    await component.login();
    expect(component.credentials.get).toHaveBeenCalled();
  });
});




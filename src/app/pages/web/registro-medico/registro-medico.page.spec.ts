import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';

import { RegistroMedicoPage } from './registro-medico.page';

describe('RegistroMedicoPage', () => {
  let component: RegistroMedicoPage;
  let fixture: ComponentFixture<RegistroMedicoPage>;
  let alertControllerMock;
  let alertMock: any;
  let loadingControllerMock;
  let loadingMock: any;

  let file = {
    size: 10,
    type: 'application/pdf'
  }
  let files = {
    target: {
      files: [] as any
    }
  }



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
    alertControllerMock.create.and.returnValue(Promise.resolve(loadingMock));

    TestBed.configureTestingModule({
      declarations: [ RegistroMedicoPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        FormBuilder,
        { provide: LoadingController, useValue: loadingControllerMock },
        { provide: AlertController, useValue: alertControllerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not save several files', () => {
    file.size = 10;
    file.type = 'application/pdf';
    files.target.files = [file, file];
    component.file = null;
    component.onFileChange(files);
    expect(component.file).toBeNull();
  });

  it('should not save invalid files', () => {
    file.size = 0;
    file.type = 'application/pdf';
    files.target.files = [file];
    component.file = null;
    component.onFileChange(files);
    expect(component.file).toBeNull();
  });

  it('should not save files different to pdf', () => {
    file.size = 10;
    file.type = 'application/xxx';
    files.target.files = [file];
    component.file = null;
    component.onFileChange(files);
    expect(component.file).toBeNull();
  });

  it('should save pdf file', () => {
    file.size = 10;
    file.type = 'application/pdf';
    files.target.files = [file];
    component.file = null;
    component.onFileChange(files);
    expect(component.file.size).toBe(file.size);
  });

  it('should validate empty form', () => {
    spyOn(component.registro, 'get');
    component.registrarse();
    expect(component.registro.get).toHaveBeenCalled();
  });

  it('should validate correct form', () => {
    component.registro.setValue({
      nombre: 'test',
      email: 'test@test.com',
      nacionalidad: 'test',
      especialidad: 'test',
      licenciaMedica: 'test',
      password: '123456',
      passwordConfirmation: '123456'
    })
    component.registrarse();
    expect(component).toBeTruthy();
  });


});

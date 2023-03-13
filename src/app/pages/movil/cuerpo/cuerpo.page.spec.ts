import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';
import { AppService } from 'src/app/config/app.service';
import { TranslateModule } from '@ngx-translate/core';
import { CuerpoPage } from './cuerpo.page';

describe('CuerpoPage', () => {
  let component: CuerpoPage;
  let fixture: ComponentFixture<CuerpoPage>;

  let alertControllerMock: any;
  let alertMock: any;
  let modalControllerMock: any;
  let modalMock: any;
  let appServiceMock: any;

  beforeEach(waitForAsync(() => {
    alertMock = jasmine.createSpyObj(['present', 'dismiss']);
    alertMock.present.and.returnValue(Promise.resolve());
    alertMock.dismiss.and.returnValue(Promise.resolve());

    alertControllerMock = jasmine.createSpyObj(['create', 'present']);
    alertControllerMock.create.and.returnValue(Promise.resolve(alertMock));

    modalMock = jasmine.createSpyObj(['present', 'dismiss', 'onWillDismiss']);
    modalMock.present.and.returnValue(Promise.resolve());
    modalMock.dismiss.and.returnValue(Promise.resolve());
    modalMock.onWillDismiss.and.returnValue(Promise.resolve());

    modalControllerMock = jasmine.createSpyObj(['create', 'present', 'dismiss']);
    modalControllerMock.create.and.returnValue(Promise.resolve(modalMock));

    appServiceMock = jasmine.createSpyObj(['registro']);

    TestBed.configureTestingModule({
      declarations: [ CuerpoPage ],
      imports: [IonicModule.forRoot(),TranslateModule.forRoot()],
      providers: [
        FormBuilder,
        { provide: AlertController, useValue: alertControllerMock },
        { provide: ModalController, useValue: modalControllerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CuerpoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data from form', () => {
    component.cuerpoForm.controls['parteCuerpo'].setValue('parte-test');
    let bodyPartLoaded: any = component.parteCuerpo;
    expect(bodyPartLoaded.value).toEqual('parte-test');
  });

  it('should rotate image', () => {
    component.rotar();
    expect(component.rotacion).toEqual('espalda');
    component.rotar();
    expect(component.rotacion).toEqual('frente');

  });

  it('should select body part', () => {
    component.parteDelcuerpo('brazo-izq');
    expect(component.cuerpo).toEqual('assets/images/brazo-izq-frente.png');
  });

  it('should dismiss modal on cancel action', () => {
    component.cancel();
    expect(modalControllerMock.dismiss).toHaveBeenCalled();
  });

  it('should mark form on invalid form', () => {
    component.cuerpoForm.controls['parteCuerpo'].setValue(null);
    component.image = 'image url';
    spyOn(component.cuerpoForm, 'get');
    component.escoger();
    expect(component.cuerpoForm.get).toHaveBeenCalled();
  });

  it('should show alert when body part is not selected', async() => {
    component.cuerpoForm.controls['parteCuerpo'].setValue('value test');
    component.image = '';
    await component.escoger();
    expect(alertMock.present).toHaveBeenCalled();
  });

  it('should dismiss modal on correct selection', async() => {
    component.cuerpoForm.controls['parteCuerpo'].setValue('value test');
    component.image = 'image url';
    await component.escoger();
    expect(modalControllerMock.dismiss).toHaveBeenCalled();
  });


});

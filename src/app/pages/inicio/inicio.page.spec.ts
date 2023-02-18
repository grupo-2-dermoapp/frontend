import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppService } from 'src/app/config/app.service';
import { AuthService } from 'src/app/services/auth.service';

import { InicioPage } from './inicio.page';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  let appServiceMock: any;
  let authServiceMock: any;

  beforeEach(waitForAsync(() => {
    appServiceMock = jasmine.createSpyObj([],{
      isPhone: true
    });
    authServiceMock = jasmine.createSpyObj([],{
      user: {
        email: 'email test',
        names: 'names test',
        uuid: 'uuid test'
      }
    });
    TestBed.configureTestingModule({
      declarations: [ InicioPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: AppService, useValue: appServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create and load data', () => {
    expect(component).toBeTruthy();
    expect(component.isPhone).toEqual(true);
    expect(component.user.email).toEqual('email test');
    expect(component.user.names).toEqual('names test');
    expect(component.user.uuid).toEqual('uuid test');
  });
});

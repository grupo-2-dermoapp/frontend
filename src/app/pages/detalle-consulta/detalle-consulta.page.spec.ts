// import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
// import { FormBuilder } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
// import { of, throwError } from 'rxjs';
// import { AppService } from 'src/app/config/app.service';
// import { CasosMedicosTableInterface } from 'src/app/interfaces/casos-medicos.interface';
// import { AuthService } from 'src/app/services/auth.service';

// import { DetalleConsultaPage } from './detalle-consulta.page';
// import { DetalleConsultaService } from './detalle-consulta.service';

// describe('DetalleConsultaPage', () => {
//   let component: DetalleConsultaPage;
//   let fixture: ComponentFixture<DetalleConsultaPage>;

//   let alertControllerMock: any;
//   let alertMock: any;
//   let loadingControllerMock;
//   let loadingMock: any;
//   let appServiceMock: any;
//   let authServiceMock: any;
//   let detalleConsultaServiceMock: any;
//   let activatedRouteMock: any;
//   let routerMock: any;
//   let router: any;

//   const medicalCaseMock: CasosMedicosTableInterface = {
//     casoMedicoId:'uuid-medical-case',
//     tipoDeDiagnostico: 'test diagnostico',
//     tipoLesion: {
//       id: 'id-lesion',
//       value: 'value-lesion'
//     },
//     formaLesion: {
//       id: 'id-forma',
//       value: 'value-forma'
//     },
//     numeroLesiones: {
//       id: 'id-numero-lesiones',
//       value: 'value-numero-lesiones'
//     },
//     distribucion: {
//       id: 'id-distribucion',
//       value: 'value-distribucion'
//     },
//     parteDelCuerpo: 'uuid-test',
//     paciente: {
//       nombre: 'nombre-paciente',
//     }
//   };

//   beforeEach(waitForAsync(() => {

//     // Mocks de servicios
//     loadingMock = jasmine.createSpyObj(['present', 'dismiss']);
//     loadingMock.present.and.returnValue(Promise.resolve());
//     loadingMock.dismiss.and.returnValue(Promise.resolve());

//     loadingControllerMock = jasmine.createSpyObj(['create', 'present']);
//     loadingControllerMock.create.and.returnValue(Promise.resolve(loadingMock));

//     alertMock = jasmine.createSpyObj(['present', 'dismiss', 'onDidDismiss']);
//     alertMock.present.and.returnValue(Promise.resolve());
//     alertMock.dismiss.and.returnValue(Promise.resolve());
//     alertMock.onDidDismiss.and.returnValue(Promise.resolve());

//     alertControllerMock = jasmine.createSpyObj(['create', 'present']);
//     alertControllerMock.create.and.returnValue(Promise.resolve(alertMock));

//     detalleConsultaServiceMock = jasmine.createSpyObj(['crearDiagnostico']);
//     detalleConsultaServiceMock.crearDiagnostico.and.returnValue(of(true));

//     activatedRouteMock = jasmine.createSpyObj([], {
//       snapshot:{
//         paramMap:{
//           get: (data: any)=>{ return medicalCaseMock.casoMedicoId}
//         }
//       }
//     });

//     authServiceMock = jasmine.createSpyObj(['getCasoMedico'],{
//       user: {
//         email: 'email test',
//         names: 'names test',
//         uuid: 'uuid test'
//       }
//     });

//     authServiceMock.getCasoMedico.and.returnValue(medicalCaseMock);

//     routerMock = jasmine.createSpyObj(['navigateByUrl']);
//     routerMock.navigateByUrl.and.returnValue(true);


//     TestBed.configureTestingModule({
//       declarations: [ DetalleConsultaPage ],
//       imports: [IonicModule.forRoot()],
//       providers: [
//         FormBuilder,
//         { provide: LoadingController, useValue: loadingControllerMock },
//         { provide: AlertController, useValue: alertControllerMock},
//         { provide: AuthService, useValue: authServiceMock },
//         { provide: DetalleConsultaService, useValue: detalleConsultaServiceMock },
//         { provide: ActivatedRoute, useValue: activatedRouteMock },
//         // { provide: Router, useValue: routerMock },

//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(DetalleConsultaPage);
//     localStorage.setItem(medicalCaseMock.casoMedicoId,JSON.stringify(medicalCaseMock));
//     component = fixture.componentInstance;
//     router = TestBed.inject(Router);
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should Acept medical case', async() => {
//     alertMock.onDidDismiss.and.returnValue(Promise.resolve({ role: 'ok'}));
//     await component.aceptarCasoMedico();
//     expect(component.casoMedicoAceptado?.value).toEqual(true);
//   });

//   it('should mark form errors at invalid form', async() => {
//     spyOn(component.diagnosticoForm, 'get');
//     await component.crearDiagnostico();
//     expect(component.diagnosticoForm.get).toHaveBeenCalled();
//   });

//   it('should create diagnosis with valid form', fakeAsync(async() => {
//     component.diagnosticoForm.setValue({
//       nombreLesion: 'test test',
//       diagnostico: 'test test test test test',
//       tratamiento: 'test test test test test',
//     })
//     spyOn(router, 'navigateByUrl');
//     await component.crearDiagnostico();
//     tick();
//     expect(router.navigateByUrl).toHaveBeenCalled();
//   }));

//   it('should show alert on service error at creating diagnosis with valid form', fakeAsync(async() => {
//     component.diagnosticoForm.setValue({
//       nombreLesion: 'test test',
//       diagnostico: 'test test test test test',
//       tratamiento: 'test test test test test',
//     })

//     detalleConsultaServiceMock.crearDiagnostico.and.returnValue(
//       throwError(() => {
//         return {
//           error: {
//             error: ''
//           }
//         }
//       })
//     );

//     spyOn(router, 'navigateByUrl');

//     await component.crearDiagnostico();
//     tick();
//     expect(alertMock.present).toHaveBeenCalled();
//   }));

//   it('should get the form data', fakeAsync(async() => {
//     const mockdata = {
//       nombreLesion: 'test test',
//       diagnostico: 'test test test test test',
//       tratamiento: 'test test test test test',
//     };

//     component.diagnosticoForm.setValue(mockdata)

//     expect(component.nombreLesion?.value).toEqual(mockdata.nombreLesion);
//     expect(component.diagnostico?.value).toEqual(mockdata.diagnostico);
//     expect(component.tratamiento?.value).toEqual(mockdata.tratamiento);
//   }));

//   it('should navigate to cases list on error getting case details', async() => {

//     spyOn(router, 'navigateByUrl');
//     await component.erroObteniendoCasoMedico();
//     expect(router.navigateByUrl).toHaveBeenCalled();
//   });
// });

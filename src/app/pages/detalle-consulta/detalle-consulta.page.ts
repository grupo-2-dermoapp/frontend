import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AppService } from 'src/app/config/app.service';
import { ConsultaResponseInterface } from 'src/app/interfaces/consulta.interface';
import {
  DiagnosticoBackendInterface,
  DiagnosticoFormInterface,
} from 'src/app/interfaces/diagnostico.interface';
import { AuthService } from 'src/app/services/auth.service';
import { DetalleConsultaService } from './detalle-consulta.service';

@Component({
  selector: 'app-detalle-consulta',
  templateUrl: './detalle-consulta.page.html',
  styleUrls: ['./detalle-consulta.page.scss'],
})
export class DetalleConsultaPage {
  isPhone = false;
  consulta: FormGroup;

  diagnosticoForm: FormGroup;
  casoMedicoId: string = '';
  diagnosticoCreado = false;
  tipoDiagnostico = '';
  doctorID = '';

  constructor(
    public appService: AppService,
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private detalleConsultaService: DetalleConsultaService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.isPhone = this.appService.isPhone;
    this.consulta = this.fb.group({
      tipoLesion: [null],
      formaLesion: [null],
      numeroLesiones: [null],
      distribucion: [null],
      parteDelCuerpo: [null],
      casoMedicoAceptado: [false],
    });
    Object.keys(this.consulta.controls).forEach((control) => {
      this.consulta.get(control)?.disable();
    });

    let casoMedicoId = this.route.snapshot.paramMap.get('casoMedicoId');

    if (casoMedicoId) {
      this.casoMedicoId = casoMedicoId;
      this.detalleConsultaService.obtenerConsulta(casoMedicoId).subscribe({
        next: (consulta: ConsultaResponseInterface) => {
          console.log('Consulta', consulta);
          const casoMedico = consulta.medical_case;
          if (consulta) {
            this.consulta
              .get('tipoLesion')
              ?.setValue(casoMedico.type_of_injury);
            this.consulta
              .get('formaLesion')
              ?.setValue(casoMedico.shape_of_injury);
            this.consulta
              .get('numeroLesiones')
              ?.setValue(casoMedico.number_of_injuries);
            this.consulta
              .get('distribucion')
              ?.setValue(casoMedico.injury_distribucion);
            this.consulta
              .get('parteDelCuerpo')
              ?.setValue(
                this.appService.obtenerParteCuerpoPorId(casoMedico.body_part)
              );
            this.tipoDiagnostico = casoMedico.type_of_diagnosis;
            this.obetenerDiagnosticoCasoMedico(this.casoMedicoId);
          }
        },
        error: (res) => {
          this.erroObteniendoCasoMedico();
        },
      });
    } else {
      this.erroObteniendoCasoMedico();
    }

    this.diagnosticoForm = this.fb.group({
      nombreLesion: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(24),
        ],
      ],
      diagnostico: [
        null,
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(200),
        ],
      ],
      tratamiento: [
        null,
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(200),
        ],
      ],
    });
  }

  obetenerDiagnosticoCasoMedico(casoMedicoId: string) {
    this.detalleConsultaService.obtenerDiagnostico(casoMedicoId).subscribe({
      next: (response) => {
        console.log('Diagnostico', response);
        const diagnostico = response.medical_diagnostic;
        if (diagnostico) {
          this.nombreLesion?.setValue(diagnostico.name_of_injury);
          this.nombreLesion?.disable();
          this.diagnostico?.setValue(diagnostico.diagnosis);
          this.diagnostico?.disable();
          this.tratamiento?.setValue(diagnostico.treatment);
          this.tratamiento?.disable();
          this.casoMedicoAceptado?.setValue(true);
          this.diagnosticoCreado = true;
          this.doctorID = diagnostico.doctor?.uuid || '';
        }
      },
    });
  }

  async erroObteniendoCasoMedico() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Error obteniendo la información del caso medico',
      buttons: ['Aceptar'],
    });
    await alert.present();
    this.router.navigateByUrl('/casos-medicos', { replaceUrl: true });
  }

  async aceptarCasoMedico() {
    const alert = await this.alertController.create({
      header: 'Aceptar caso medico',
      message: 'Esta seguro que desea aceptar este caso?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Aceptar', role: 'ok' },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    if (role === 'ok') {
      this.casoMedicoAceptado?.setValue(true);
    }
  }

  async validarAgendarCita() {
    const alert = await this.alertController.create({
      header: 'Agengar cita',
      message: 'Esta seguro que desea agendar cita para este caso?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Aceptar', role: 'ok' },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    if (role === 'ok') {
      this.agendarCita();
    }
  }

  async agendarCita() {
    const loading = await this.loadingController.create();
    await loading.present();
    await loading.dismiss();
    this.detalleConsultaService
      .agendarCita(this.doctorID, this.authService.user.uuid)
      .subscribe({
        next: async (res) => {
          await loading.dismiss();
          const fechaCita = res.event.start_date.split('T');
          const alert = await this.alertController.create({
            header: res.event.name,
            message: `Su agenda ha sido exitosamente asignada para el dia ${fechaCita[0]} a las ${fechaCita[1]}`,
            buttons: ['Aceptar'],
          });
          await alert.present();
          this.router.navigateByUrl('/inicio', { replaceUrl: true });
        },
        error: async (res) => {
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Creación de agenda',
            message: 'Hubo un error creando la agenda',
            buttons: ['Aceptar'],
          });
          await alert.present();
        },
      });
  }

  async crearDiagnostico() {
    if (this.diagnosticoForm.invalid) {
      Object.keys(this.diagnosticoForm.controls).forEach((control) => {
        this.diagnosticoForm.get(control)?.markAllAsTouched();
      });
    } else {
      const loading = await this.loadingController.create();
      await loading.present();
      this.detalleConsultaService
        .crearDiagnostico(
          this.transformarParaBackend(this.diagnosticoForm.value)
        )
        .subscribe({
          next: async (res) => {
            await loading.dismiss();
            const alert = await this.alertController.create({
              header: 'Creación de diagnóstico',
              message: 'Creación de diagnóstico exitoso',
              buttons: ['Aceptar'],
            });
            await alert.present();
            this.router.navigateByUrl('/casos-medicos', { replaceUrl: true });
          },
          error: async (res) => {
            await loading.dismiss();
            const alert = await this.alertController.create({
              header: 'Creación de diagnóstico',
              message: 'Hubo un error creando el diagnóstico',
              buttons: ['Aceptar'],
            });
            await alert.present();
          },
        });
    }
  }

  transformarParaBackend(
    diagnosticoForm: DiagnosticoFormInterface
  ): DiagnosticoBackendInterface {
    return {
      name_of_injury: diagnosticoForm.nombreLesion,
      diagnosis: diagnosticoForm.diagnostico,
      treatment: diagnosticoForm.tratamiento,
      medical_case_uuid: this.casoMedicoId,
      doctor_uuid: this.authService.user.uuid,
    };
  }

  get casoMedicoAceptado() {
    return this.consulta.get('casoMedicoAceptado');
  }

  get nombreLesion() {
    return this.diagnosticoForm.get('nombreLesion');
  }

  get diagnostico() {
    return this.diagnosticoForm.get('diagnostico');
  }

  get tratamiento() {
    return this.diagnosticoForm.get('tratamiento');
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/config/app.service';
import { AlertController, LoadingController } from '@ionic/angular';
import {
  HistoriaClinicaBackendInterface,
  HistoriaClinicaFrontendInterface,
  PacienteFrontendInterface,
} from 'src/app/interfaces/paciente.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ConsultasService } from './consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  isPhone = false;
  paciente: PacienteFrontendInterface | null = null;
  informacionPaciente = '';
  historiaClinica: HistoriaClinicaFrontendInterface | null = null;
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private consultasService: ConsultasService,
    private loadingController: LoadingController
  ) {
    this.isPhone = this.appService.isPhone;
  }

  crearInformacionPaciente() {
    this.informacionPaciente = `Edad: ${this.paciente?.edad}\nEmail: ${this.paciente?.email}\nLocación: ${this.paciente?.locacion}`;
  }

  async obtenerHistoriasClinicas(pacienteId: string) {
    const loading = await this.loadingController.create();
    await loading.present();
    this.consultasService.obtenerHistoriasCLinicas(pacienteId).subscribe({
      next: async (res) => {
        await loading.dismiss();

        this.historiaClinica = this.convertirHistoriasClinicasBackendAFrontEnd(
          res.clinical_history
        );
        console.log(this.historiaClinica);
      },
      error: async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error obteniendo la historia clinica',
          message: res.error.error,
          buttons: ['Aceptar'],
        });
        await alert.present();
      },
    });
  }

  convertirHistoriasClinicasBackendAFrontEnd(
    historiaClinicaBackend: HistoriaClinicaBackendInterface
  ): HistoriaClinicaFrontendInterface {
    return {
      pacienteId: historiaClinicaBackend.patient_uuid,
      ultimaActualizacion: historiaClinicaBackend.updated_at,
      casosMedicos: historiaClinicaBackend.medical_cases,
    };
  }

  ngOnInit() {
    const pacienteId = this.route.snapshot.paramMap.get('pacienteId');

    if (pacienteId === null) {
      this.erroObteniendoPaciente();
    } else if (this.isPhone) {
      this.obtenerHistoriasClinicas(pacienteId);
    } else {
      this.cargaInfoParaMedico(pacienteId);
    }
  }

  cargaInfoParaMedico(pacienteId: string) {
    this.paciente = this.authService.getPaciente(pacienteId);
    console.log('Paciente: ', this.paciente);
    if (this.paciente) {
      this.crearInformacionPaciente();
      this.obtenerHistoriasClinicas(this.paciente.uuid);
    } else {
      this.erroObteniendoPaciente();
    }
  }

  async erroObteniendoPaciente() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Error obteniendo la informacion del paciente',
      buttons: ['Aceptar'],
    });
    await alert.present();
    this.router.navigateByUrl(
      this.isPhone ? '/inicio' : '/historias-clinicas',
      { replaceUrl: true }
    );
  }
}

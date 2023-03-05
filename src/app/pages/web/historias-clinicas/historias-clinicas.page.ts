import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { map, Observable, startWith } from 'rxjs';
import { AppService } from 'src/app/config/app.service';
import {
  PacienteBackendInterface,
  PacienteFrontendInterface,
} from 'src/app/interfaces/paciente.interface';
import { AuthService } from 'src/app/services/auth.service';
import { HistoriasClinicasService } from './historias-clinicas.service';

@Component({
  selector: 'app-historias-clinicas',
  templateUrl: './historias-clinicas.page.html',
  styleUrls: ['./historias-clinicas.page.scss'],
})
export class HistoriasClinicasPage implements OnInit {
  pacientes: PacienteFrontendInterface[] = [];
  filtroPacientes: any = new Observable<PacienteFrontendInterface[] | ''>();
  filtroPacienteForm: FormGroup;
  constructor(
    private historiasClinicasService: HistoriasClinicasService,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController,
    private fb: FormBuilder,
    private appService: AppService,
    private authService: AuthService
  ) {
    this.filtroPacienteForm = this.fb.group({
      pacienteCrtl: [null],
    });
  }

  busquedaCasosMedicos() {
    this.filtroPacientes = this.filtroPacienteForm
      .get('pacienteCrtl')
      ?.valueChanges.pipe(
        startWith(''),
        map((paciente) =>
          paciente ? this._filtroPacientes(paciente) : this.pacientes
        )
      );
  }

  private _filtroPacientes(value: any) {
    if (typeof value === 'string') {
      const valorFiltro = value.toLowerCase();
      return this.pacientes.filter((paciente) => {
        const filter = paciente?.nombre.toLowerCase();
        return filter.includes(valorFiltro);
      });
    }
    return '';
  }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.historiasClinicasService.getPatients().subscribe({
      next: async (res) => {
        await loading.dismiss();
        this.pacientes = this.convertirPacientesBackendAFrontEnd(res.patients);
        console.log(this.pacientes);
        this.busquedaCasosMedicos();
      },
      error: async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error obteniendo los pacientes',
          message: res.error.error,
          buttons: ['Aceptar'],
        });
        await alert.present();
      },
    });
  }

  convertirPacientesBackendAFrontEnd(
    pacientes: PacienteBackendInterface[]
  ): PacienteFrontendInterface[] {
    const pacientesFrontEnd: PacienteFrontendInterface[] = [];
    pacientes.forEach((paciente) =>
      pacientesFrontEnd.push({
        uuid: paciente.uuid,
        nombre: paciente.names,
        edad: paciente.age,
        email: paciente.email,
        locacion: paciente.location,
      })
    );

    return pacientesFrontEnd;
  }

  async verHistoriaClinica(paciente: PacienteFrontendInterface) {
    this.authService.setPaciente(paciente);
    await this.router.navigate(['/consultas', { pacienteId: paciente.uuid }]);
  }
}

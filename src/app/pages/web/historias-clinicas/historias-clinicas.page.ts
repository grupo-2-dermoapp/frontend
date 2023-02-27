import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AppService } from 'src/app/config/app.service';
import { HistoriaClinicaBackendInterface, HistoriaClinicaFrontendInterface, PacienteInterface } from 'src/app/interfaces/paciente.interface';
import { HistoriasClinicasService } from './historias-clinicas.service';

@Component({
  selector: 'app-historias-clinicas',
  templateUrl: './historias-clinicas.page.html',
  styleUrls: ['./historias-clinicas.page.scss'],
})
export class HistoriasClinicasPage implements OnInit {

  pacientes: HistoriaClinicaFrontendInterface[] = [];

  constructor(private historiasClinicasService:HistoriasClinicasService,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController,
    private fb: FormBuilder,
    private appService:AppService) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
		await loading.present();
        this.historiasClinicasService.getHistoriasClinicas()
        .subscribe({
            next: async (res) => {
                await loading.dismiss();
                this.pacientes = this.convertirCasosMedicosBackendAFrontEnd(res.medical_history);
                console.log(this.pacientes);
            },
            error:async (res) => {
                await loading.dismiss();
                const alert = await this.alertController.create({
                    header: 'Error obteniendo las historias clinicas',
                    message: res.error.error,
                    buttons: ['Aceptar']
                });
                await alert.present();
            }}
        );
  }

  convertirCasosMedicosBackendAFrontEnd(historiasClinicas:HistoriaClinicaBackendInterface[]):HistoriaClinicaFrontendInterface[]{ 
    const historiasClinicasFrontend:HistoriaClinicaFrontendInterface[] = [];
    historiasClinicas.forEach((historiaClinica)=>
    historiasClinicasFrontend.push({
      uuid: historiaClinica.uuid,
      nombrePaciente: historiaClinica.patient.name,
      casosMedicos:[]
    }));

    return historiasClinicasFrontend;
  }

  async verHistoriaClinica(paciente:HistoriaClinicaFrontendInterface | null){
    await this.router.navigate(['/consultas']);
  }

}


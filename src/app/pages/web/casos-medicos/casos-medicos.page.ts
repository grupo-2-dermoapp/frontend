import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CasosMedicosService } from './casos-medicos.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  CasosMedicosInterface,
  CasosMedicosTableInterface,
} from 'src/app/interfaces/casos-medicos.interface';
import { AppService } from 'src/app/config/app.service';

@Component({
  selector: 'app-casos-medicos',
  templateUrl: './casos-medicos.page.html',
  styleUrls: ['./casos-medicos.page.scss'],
})
export class CasosMedicosPage implements OnInit {
  casos: CasosMedicosTableInterface[] = [];
  filtroCasosMedicos: any = new Observable<CasosMedicosTableInterface>();
  casosMedicosForm: FormGroup;
  constructor(
    private casosMedicosService: CasosMedicosService,
    private authService: AuthService,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController,
    private fb: FormBuilder,
    private appService: AppService
  ) {
    this.casosMedicosForm = this.fb.group({
      casosMedicosCtrl: [null],
    });
  }

  busquedaCasosMedicos() {
    this.filtroCasosMedicos = this.casosMedicosForm
      .get('casosMedicosCtrl')
      ?.valueChanges.pipe(
        startWith(''),
        map((casoMedico) =>
          casoMedico ? this._filtroCasosMedicos(casoMedico) : this.casos
        )
      );
  }

  private _filtroCasosMedicos(value: any) {
    if (typeof value === 'string') {
      const valorFiltro = value.toLowerCase();
      return this.casos.filter((casosMedicos) => {
        const filter = casosMedicos?.paciente.nombre.toLowerCase();
        return filter.includes(valorFiltro);
      });
    }
    return '';
  }

  verDetalleCasoMedico(casoMedico: CasosMedicosTableInterface) {
    this.router.navigate([
      '/detalle-consulta',
      { casoMedicoId: casoMedico.casoMedicoId },
    ]);
  }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.casosMedicosService.obtenerCasosMedicos().subscribe({
      next: async (res) => {
        await loading.dismiss();

        this.casos = this.convertirCasosMedicosBackendAFrontEnd(
          res.medical_cases
        );
        console.log(this.casos);
        this.busquedaCasosMedicos();
      },
      error: async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error obteniendo los casos medicos',
          message: res.error.error,
          buttons: ['Aceptar'],
        });
        await alert.present();
      },
    });
  }

  convertirCasosMedicosBackendAFrontEnd(
    casosMedicosBackend: CasosMedicosInterface[]
  ): CasosMedicosTableInterface[] {
    let casosMedicosFront: CasosMedicosTableInterface[] = [];
    casosMedicosBackend.forEach((casoMedicoBack, i) =>
      casosMedicosFront.push({
        tipoDeDiagnostico: casoMedicoBack.type_of_diagnosis,
        casoMedicoId: casoMedicoBack.uuid,
        tipoLesion: this.appService.obtenerConsultaPorId(
          'tiposDeLesion',
          casoMedicoBack.type_of_injury
        ),
        formaLesion: this.appService.obtenerConsultaPorId(
          'formasDeLesiones',
          casoMedicoBack.shape_of_injury
        ),
        numeroLesiones: this.appService.obtenerConsultaPorId(
          'numeroDeLesiones',
          casoMedicoBack.number_of_injuries
        ),
        distribucion: this.appService.obtenerConsultaPorId(
          'distribucionDeLaLesion',
          casoMedicoBack.injury_distribucion
        ),
        parteDelCuerpo: this.appService.obtenerParteCuerpoPorId(
          casoMedicoBack.body_part
        ),
        paciente: {
          nombre: casoMedicoBack?.patient?.names,
        },
      })
    );
    return casosMedicosFront;
  }
}

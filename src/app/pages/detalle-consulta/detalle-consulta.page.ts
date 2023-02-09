import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AppService } from 'src/app/config/app.service';
import { AuthService } from 'src/app/services/auth.service';
import { DetalleConsultaService } from './detalle-consulta.service';

@Component({
  selector: 'app-detalle-consulta',
  templateUrl: './detalle-consulta.page.html',
  styleUrls: ['./detalle-consulta.page.scss'],
})
export class DetalleConsultaPage implements OnInit {

  isPhone = false;
  consulta: FormGroup;

  constructor(public appService:AppService,
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private detalleConsultaService:DetalleConsultaService,
    private router: Router,
    private authService:AuthService,
    private route: ActivatedRoute) {

    this.isPhone = this.appService.isPhone;
    this.consulta = this.fb.group({
      tipoLesion: [{value:1,disabled:true}],
      formaLesion: [{value:1,disabled:true}],
      numeroLesiones: [{value:1,disabled:true}],
      distribucion: [{value:1,disabled:true}],
      parteDelCuerpo: [{value:'Cara',disabled:true}],
      parteDelCuerpoId: [null],
      casoMedicoAceptado: [null]
      });
      const casoMedicoId = this.route.snapshot.paramMap.get('casoMedicoId');
      console.log(casoMedicoId);
   }

  ngOnInit() {
  }

  async aceptarCasoMedico() {
    const alert = await this.alertController.create({
      header: 'Aceptar caso medico',
      message: 'Esta seguro que desea aceptar este caso?',
      buttons: [{text: 'Cancelar',role:'cancel'},{text: 'Aceptar',role:'ok'}]
    });
    await alert.present();
    const {role}  = await alert.onDidDismiss();
    if(role==='ok'){
      this.casoMedicoAceptado?.setValue(true);
      this.seleccionarCasomedico();
    }
  }

  async seleccionarCasomedico() {
    const loading = await this.loadingController.create();
		await loading.present();

		this.detalleConsultaService.seleccionarCasoMedico("",this.authService.user.email)
		.subscribe({
			next:async (res) => {
				await loading.dismiss();
				await loading.dismiss();
				const alert = await this.alertController.create({
					header: 'Selección de caso medico',
					message: 'Has aceptado el caso medico ',
					buttons: ['Aceptar']
				});
				await alert.present();
				this.router.navigateByUrl('/casos-medicos', { replaceUrl: true });
			},
			error:async (res) => {
				await loading.dismiss();
				const alert = await this.alertController.create({
					header: 'Selección de caso medico',
					message: 'Error seleccionando caso medico',
					buttons: ['Aceptar']
				});
				await alert.present();
			}
		});
  }

  get casoMedicoAceptado() {
		return this.consulta.get('casoMedicoAceptado');
	}

}

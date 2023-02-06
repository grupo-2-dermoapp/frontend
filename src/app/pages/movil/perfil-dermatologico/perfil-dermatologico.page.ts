import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AppService } from 'src/app/config/app.service';
import { PerfilDermatologicoService } from './perfil-dermatologico.service';
import { PerfilDermatologicoBackendInterface, PerfilDermatologicoFormInterface } from 'src/app/interfaces/perfil-dermatologico.interface';

@Component({
  selector: 'app-perfil-dermatologico',
  templateUrl: './perfil-dermatologico.page.html',
  styleUrls: ['./perfil-dermatologico.page.scss'],
})
export class PerfilDermatologicoPage  {

  perfilDermatologico: FormGroup;

	constructor(
		private fb: FormBuilder,
		private alertController: AlertController,
		private loadingController: LoadingController,
		private modalCtrl: ModalController,
		public app: AppService,
		private perfilDermatologicoService:PerfilDermatologicoService
	) {
    this.perfilDermatologico = this.fb.group({
		colorOjos: [null, [Validators.required]],
		colorCabello: [null, [Validators.required]],
		colorPiel: [null,  [Validators.required]],
		cantidadPecas: [null,  [Validators.required]],
		exposicionAlSol: [null,  [Validators.required]],
		bronceadoConElSol: [null,  [Validators.required]],
		cantidadBronceado: [null,  [Validators.required]],
		sensibilidadDeCaraConSol: [null,  [Validators.required]],
		frecuenciaBronceo: [null,  [Validators.required]],
		ultimaExposicion: [null, [Validators.required]]
		});
  }

	cancel() {
		return this.modalCtrl.dismiss(null, 'cancel');
	}

	escoger(perfilDematologico:string) {
		return this.modalCtrl.dismiss(perfilDematologico, 'escoger');
	}

	async verificar() {
		if (this.perfilDermatologico.invalid){
			Object.keys(this.perfilDermatologico.controls)
			.forEach(control=>{
				this.perfilDermatologico.get(control)?.markAllAsTouched();
			}
			);
		}else {
			const loading = await this.loadingController.create();
			await loading.present();
			console.log(this.perfilDermatologico.value);
			this.perfilDermatologicoService.registrarPerfil(
				this.transformarParaBackend(this.perfilDermatologico.value))
				.subscribe({
					next: async (res) => {
						await loading.dismiss();
						this.escoger(res.dermatological_data.uuid);
					},
					error:async (res) => {
						await loading.dismiss();
						const alert = await this.alertController.create({
							header: 'Creacion del perfil dermatologico errado',
							message: res.error.error,
							buttons: ['Aceptar']
						});
						await alert.present();
					}}
				);
		}
	}

	transformarParaBackend(perfilDematologico:PerfilDermatologicoFormInterface):PerfilDermatologicoBackendInterface{
		return {
			eyes_color:perfilDematologico.colorOjos,
			hair_color:perfilDematologico.colorCabello,
			skin_color: perfilDematologico.colorPiel,
			freckles: perfilDematologico.cantidadPecas,
			skin_stay_in_the_sun: perfilDematologico.exposicionAlSol,
			turn_brown: perfilDematologico.bronceadoConElSol,
			how_brown: perfilDematologico.cantidadBronceado,
			face_sensitive: perfilDematologico.sensibilidadDeCaraConSol,
			how_often_tan: perfilDematologico.frecuenciaBronceo,
			artificial_time_expose: perfilDematologico.ultimaExposicion,
		}
	}
	get colorOjos() {
		return this.perfilDermatologico.get('colorOjos');
	}

	get colorCabello() {
		return this.perfilDermatologico.get('colorCabello');
	}

	get colorPiel() {
		return this.perfilDermatologico.get('colorPiel');
	}

	get cantidadPecas() {
		return this.perfilDermatologico.get('cantidadPecas');
	}

	get exposicionAlSol() {
		return this.perfilDermatologico.get('exposicionAlSol');
	}

	get bronceadoConElSol() {
		return this.perfilDermatologico.get('bronceadoConElSol');
	}

	get cantidadBronceado() {
		return this.perfilDermatologico.get('cantidadBronceado');
	}

	get sensibilidadDeCaraConSol() {
		return this.perfilDermatologico.get('sensibilidadDeCaraConSol');
	}

	get frecuenciaBronceo() {
		return this.perfilDermatologico.get('frecuenciaBronceo');
	}

	get ultimaExposicion() {
		return this.perfilDermatologico.get('ultimaExposicion');
	}
}

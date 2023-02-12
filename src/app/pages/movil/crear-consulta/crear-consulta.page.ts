import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppService } from 'src/app/config/app.service';
import { CrearConsultaService } from './crear-consulta.service';
import { CuerpoPage } from '../cuerpo/cuerpo.page';
import { ConsultaBackendInterface, ConsultaFormInterface } from 'src/app/interfaces/consulta.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-crear-consulta',
  templateUrl: './crear-consulta.page.html',
  styleUrls: ['./crear-consulta.page.scss'],
})
export class CrearConsultaPage {

  consulta: FormGroup;

	constructor(
		private fb: FormBuilder,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController,
		public app: AppService,
		private crearConsultaService:CrearConsultaService,
		private modalCtrl: ModalController,
		private authService:AuthService
	) {
    this.consulta = this.fb.group({
		tipoLesion: [null, [Validators.required]],
		formaLesion: [null, [Validators.required]],
		numeroLesiones: [null, [Validators.required]],
		distribucion: [null, [Validators.required]],
		parteDelCuerpo: ['',[Validators.required]],
		parteDelCuerpoId: [null]
		});
  }

	async crearConsulta() {
		this.consulta.markAsDirty();

		Object.keys(this.consulta.controls)
		.forEach(control=>{
			this.consulta.get(control)?.markAllAsTouched();
		}
		)
		if(this.consulta.valid){
			await this.crearConsultaTipoDiagnostico();
		}
	}

	async crearConsultaTipoDiagnostico() {
		const alert = await this.alertController.create({
			header: 'Seleccione el tipo de diganóstico',
			buttons: ['Cancelar','Aceptar'],
			inputs: [
			  {
				label: 'Auto-generado',
				type: 'radio',
				value: 'AUTO',
			  },
			  {
				label: 'Medico',
				type: 'radio',
				value: 'DOCTOR',
			  }
			],
		  });
		  
		  await alert.present();
		  const { data } = await alert.onDidDismiss();
		  console.log(data)
		  const loading = await this.loadingController.create();
			await loading.present();
			this.crearConsultaService.crearConsulta(
				this.transformarParaBackend(this.consulta.value,data.values))
			.subscribe(()=>{
				this.router.navigateByUrl('/inicio', { replaceUrl: true });
				loading.dismiss()});
	}

	transformarParaBackend(consultaForm:ConsultaFormInterface,tipoDeDiagnostico:string):ConsultaBackendInterface{
		return {
			type_of_injury:consultaForm.tipoLesion,
			shape_of_injury:consultaForm.formaLesion,
			number_of_injuries: consultaForm.numeroLesiones,
			injury_distribucion: consultaForm.distribucion,
			body_part: consultaForm.parteDelCuerpoId,
			user_id: this.authService.user.user_id,
			type_of_diagnosis:tipoDeDiagnostico
		}
	}

	async escogerParteDelCuerpo(){
		console.log("Escogiendo parte del cuerpo");
		const modal = await this.modalCtrl.create({
			component: CuerpoPage,
		  });
		  modal.present();
	  
		  const { data, role } = await modal.onWillDismiss();
	  
		  if (role === 'escoger') {
			console.log("Parte del cuerpo ",data);
			this.consulta.get('parteDelCuerpo')?.setValue(data.value)
			this.consulta.get('parteDelCuerpoId')?.setValue(data.id)
		  }

	}

	get tipoLesion() {
		return this.consulta.get('tipoLesion');
	}

	get formaLesion() {
		return this.consulta.get('formaLesion');
	}

	get numeroLesiones() {
		return this.consulta.get('numeroLesiones');
	}

	get distribucion() {
		return this.consulta.get('distribucion');
	}

	get parteDelCuerpo() {
		return this.consulta.get('parteDelCuerpo');
	}


}

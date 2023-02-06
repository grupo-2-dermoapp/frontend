import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegistroService } from './registro.service';
import { PerfilDermatologicoPage } from '../perfil-dermatologico/perfil-dermatologico.page';
import { RegistroUsuarioBackendInterface, RegistroUsuarioFormInterface } from 'src/app/interfaces/registro-usuario.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  registro: FormGroup;
	constructor(
		private fb: FormBuilder,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController,
		private registroService:RegistroService,
		private modalCtrl: ModalController
	) {
    this.registro = this.fb.group({
			email:  ['',[Validators.required, Validators.email]],
      		nombre: ['',[Validators.required, Validators.minLength(4),Validators.maxLength(60)]],
      		edad: [null,[Validators.required, Validators.max(99),Validators.min(18)]],
      		residencia: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      		validacionPerfilDematologico: [false, [Validators.requiredTrue]],
			perfilDematologico: [null],
	  		password: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(24)]],
      		passwordConfirmation: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(24)]],
	  		terminosCondiciones: [false,[Validators.requiredTrue]]
		},{
			validators: this.confirmedValidator('password', 'passwordConfirmation'),
		  })
  }

	async crearPerfilDermatologico() {
		const modal = await this.modalCtrl.create({
			component: PerfilDermatologicoPage,
		  });
		  modal.present();

		  const { data, role } = await modal.onWillDismiss();

		  if (role === 'escoger') {
			this.registro.get('validacionPerfilDematologico')?.setValue(true);
			this.registro.get('validacionPerfilDematologico')?.disable();
			this.registro.get('perfilDematologico')?.setValue(data);
		  }
	}

	async registrarse() {
		if (this.registro.invalid){
			Object.keys(this.registro.controls)
			.forEach(control=>{
				this.registro.get(control)?.markAllAsTouched();
			}
			);
			if (this.registro.get('perfilDematologico')?.value == null){
				const alert = await this.alertController.create({
					header: 'Registro',
					message: "Debe crear un perfil dermatológico para continuar.",
					buttons: ['Aceptar']
				});
				await alert.present();
			}
		} else {
		const loading = await this.loadingController.create();
		await loading.present();

		this.registroService.registro(this.transformarParaBackend(this.registro.value))
		.subscribe({
			next:async (res) => {
				await loading.dismiss();
				await loading.dismiss();
				const alert = await this.alertController.create({
					header: 'Registro Exitoso',
					message: 'Gracias por registrarse en DermoApp',
					buttons: ['Aceptar']
				});
				await alert.present();
				this.router.navigateByUrl('/login', { replaceUrl: true });
			},
			error:async (res) => {
				await loading.dismiss();
				const alert = await this.alertController.create({
					header: 'Registro fallido',
					message: res.error.error,
					buttons: ['Aceptar']
				});
				await alert.present();
			}
		});
		}

	}

	transformarParaBackend(registroUsuario:RegistroUsuarioFormInterface):RegistroUsuarioBackendInterface{
		return {
			email:registroUsuario.email,
			names: registroUsuario.nombre,
			password:registroUsuario.password,
			age:registroUsuario.edad,
			location: registroUsuario.residencia,
			dermatological_profile_uuid: registroUsuario.perfilDematologico
		}
	}

	get email() {
		return this.registro.get('email');
	}

	get nombre() {
		return this.registro.get('nombre');
	}

	get edad() {
		return this.registro.get('edad');
	}

	get residencia() {
		return this.registro.get('residencia');
	}

	get validacionPerfilDematologico() {
		return this.registro.get('validacionPerfilDematologico');
	}

	get perfilDematologico() {
		return this.registro.get('perfilDematologico');
	}

	get password() {
		return this.registro.get('password');
	}

	get passwordConfirmation() {
		return this.registro.get('passwordConfirmation');
	}

	get terminosCondiciones() {
		return this.registro.get('terminosCondiciones');
	}

	confirmedValidator(controlName: string, matchingControlName: string) {
		return (formGroup: FormGroup) => {
		  const control = formGroup.controls[controlName];
		  const matchingControl = formGroup.controls[matchingControlName];
		  if (
			matchingControl.errors &&
			!matchingControl.errors?.['confirmedValidator']
		  ) {
			return;
		  }
		  if (control.value !== matchingControl.value) {
			matchingControl.setErrors({ confirmedValidator: true });
		  } else {
			matchingControl.setErrors(null);
		  }
		};
	  }


}

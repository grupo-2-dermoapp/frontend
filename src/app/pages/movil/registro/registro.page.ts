import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegistroService } from './registro.service';
import { PerfilDermatologicoPage } from '../perfil-dermatologico/perfil-dermatologico.page';
import { RegistroUsuarioBackendInterface, RegistroUsuarioFormInterface } from 'src/app/interfaces/registro-usuario.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  registro: FormGroup;
  lang = 'es';
	constructor(
		private fb: FormBuilder,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController,
		private registroService:RegistroService,
		private modalCtrl: ModalController,
    public translate: TranslateService
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
    translate.addLangs(['en']);
    translate.setDefaultLang('es');
    translate.use(this.lang.match(/en/) ? this.lang : 'es');
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

  async verTerminosYCondiciones(){
		const alert = await this.alertController.create({
			header: 'Terminos y condiciones',
			message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien ex, convallis at enim vel, rutrum luctus risus. Morbi imperdiet porttitor scelerisque. Vivamus rhoncus felis vel vulputate luctus. Maecenas in mattis enim, quis tristique purus. Nunc sed faucibus nunc, id venenatis leo. Curabitur orci est, lacinia et nisi eget, rhoncus elementum urna. Duis massa quam, porttitor at efficitur malesuada, fringilla a eros. Donec iaculis enim nec ante tincidunt fermentum. Pellentesque vel fermentum diam. Praesent sit amet fermentum lacus, quis volutpat massa. Proin consequat eros vitae orci luctus, vel faucibus lectus fringilla. Aliquam tincidunt scelerisque ante, tempus congue elit blandit eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam id nibh diam. Curabitur mauris velit, eleifend egestas pellentesque a, porta ut quam.

			Nunc fringilla ante nec ante molestie, vitae gravida est ullamcorper. Proin eget eleifend dolor. Nam varius nisl a rhoncus malesuada. Quisque sed lorem ac leo iaculis pulvinar. Morbi vestibulum volutpat mauris a cursus. Nulla vel ex tincidunt, ultrices justo sed, placerat lorem. Suspendisse potenti. Sed fringilla consequat risus a convallis. Quisque faucibus arcu in mollis fermentum. Maecenas est velit, vestibulum sed risus in, congue efficitur purus. Cras at auctor neque, ac rutrum nunc.

			Phasellus porttitor dolor tempor velit venenatis pulvinar. Vivamus eu est sit amet velit ullamcorper laoreet vitae in justo. Duis pellentesque vitae sapien ac pretium. In scelerisque ante quis dictum sollicitudin. Cras sit amet tortor tincidunt, varius tortor id, eleifend tellus. Proin pulvinar orci eros, et malesuada metus iaculis in. In gravida iaculis risus.

			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci urna, iaculis ac mi id, ornare volutpat eros. Pellentesque sagittis lorem ac dolor sodales, sit amet accumsan lectus venenatis. Donec venenatis metus augue, ut ultricies lorem vehicula eu. Proin ultrices volutpat ex, sit amet ornare orci finibus sit amet. Mauris tristique at sem ut condimentum. Mauris a lacinia ligula. In ac ex tempus, pretium nisi in, pharetra tellus. Maecenas ornare, ipsum non ultrices facilisis, ipsum purus tempus velit, ut fermentum orci ligula vitae nisi. Suspendisse nulla velit, hendrerit at ultricies sed, volutpat sed ex. Nunc ut tellus vestibulum, efficitur justo ut, gravida arcu. Aliquam blandit nisi gravida efficitur vestibulum. Etiam sem arcu, dapibus non massa eu, sagittis convallis odio. Duis elementum arcu eget ex aliquam, et semper eros dignissim. Cras et tellus quam. Duis odio magna, aliquet eu sodales eu, pellentesque vel enim.

			In tempus urna in massa hendrerit vehicula. Curabitur semper velit quis enim rhoncus feugiat. Nullam semper ipsum eu urna ultricies facilisis. Maecenas porttitor augue nec semper rutrum. Maecenas finibus lorem et odio elementum, et vulputate magna venenatis. Nunc mattis nunc turpis, in venenatis mi eleifend eu. Maecenas quis nisl eu tellus mattis vehicula. Integer non ipsum varius, euismod ligula eget, efficitur nibh. Fusce consequat sem magna, nec porttitor diam ultricies eget. Aenean non maximus odio. Duis augue nunc, pulvinar ut nunc nec, vulputate tempor tellus. Aenean ultrices dignissim bibendum.

			Generated 5 paragraphs, 485 words, 3293 bytes of Lorem Ipsum`,
			cssClass: 'alert-justify',
			buttons: ['Aceptar']
		});
		await alert.present();
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

    cambiarIdioma(lang: string): void {
      this.lang = lang;
      this.translate.use(lang);
    }

}

import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { RegistroMedicoBackendInterface, RegistroMedicoFormInterface } from 'src/app/interfaces/registro-medico.interface';
import { RegistroMedicoService } from './registro-medico.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registro-medico',
  templateUrl: './registro-medico.page.html',
  styleUrls: ['./registro-medico.page.scss'],
})
export class RegistroMedicoPage {

  registro: FormGroup;
  @ViewChild('inputFiles') inputFiles:any;
  file: any;
  lang = 'es';

	constructor(
		private fb: FormBuilder,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController,
		private registroMedicoService: RegistroMedicoService,
    public translate: TranslateService
	) {
    this.registro = this.fb.group({
		nombre: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(60)]],
		email: ['', [Validators.required, Validators.email]],
      	nacionalidad: [null, [Validators.required]],
		especialidad: [null, [Validators.required]],
      	licenciaMedica: [null, [Validators.required]],
	    password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(24)]],
      	passwordConfirmation: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(24)]],
		},
		{
		  validator: this.confirmedValidator('password', 'passwordConfirmation'),
		}
		);
    translate.addLangs(['en']);
    translate.setDefaultLang('es');
    translate.use(this.lang.match(/en/) ? this.lang : 'es');
  }

	async registrarse() {

		if (this.registro.invalid){
			Object.keys(this.registro.controls)
			.forEach(control=>{
				this.registro.get(control)?.markAllAsTouched();
			}
			)
		} else {
		const loading = await this.loadingController.create();
		await loading.present();
		this.registroMedicoService.registro(this.registro.value,this.file)
		.subscribe({
			next:async (res) => {
				await loading.dismiss();
				const alert = await this.alertController.create({
					header: 'Registro correcto',
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
			}}
		);
		}
	}

	async onFileChange($event:any){
		const { files } = $event.target;
		let message = 'Archivo ajuntado correctamente';
		if (files.length > 1){
			message = "Solo se puede adjuntar un archivo.";
		} else if (files[0].size === 0) {
			message = "Archivo corrupto o inv??lido";
		} else if (files[0].type !== 'application/pdf') {
			message = "El archivo tiene que tener extenxi??n PDF.";
		} else if (files.length ==1){
			this.file = files[0];
		}
		const alert = await this.alertController.create({
			header: 'Agregar licencia medica',
			message: message,
			buttons: ['Aceptar']
		});
		await alert.present();
	}

	attachFiles() {
		this.inputFiles.nativeElement.click();
	}

	get nombre() {
		return this.registro.get('nombre');
	}

	get email() {
		return this.registro.get('email');
	}

	get nacionalidad() {
		return this.registro.get('nacionalidad');
	}

	get especialidad() {
		return this.registro.get('especialidad');
	}

	get licenciaMedica() {
		return this.registro.get('licenciaMedica');
	}

	get password() {
		return this.registro.get('password');
	}

	get passwordConfirmation() {
		return this.registro.get('passwordConfirmation');
	}

	get nacionalidades(){
		return ["Afganist??n","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiy??n","Bahamas","Banglad??s","Barbados","Bar??in","B??lgica","Belice","Ben??n","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brun??i","Bulgaria","Burkina Faso","Burundi","But??n","Cabo Verde","Camboya","Camer??n","Canad??","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos ??rabes Unidos","Eritrea","Eslovaquia","Eslovenia","Espa??a","Estados Unidos","Estonia","Etiop??a","Filipinas","Finlandia","Fiyi","Francia","Gab??n","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bis??u","Hait??","Honduras","Hungr??a","India","Indonesia","Irak","Ir??n","Irlanda","Islandia","Islas Marshall","Islas Salom??n","Israel","Italia","Jamaica","Jap??n","Jordania","Kazajist??n","Kenia","Kirguist??n","Kiribati","Kuwait","Laos","Lesoto","Letonia","L??bano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Mal??","Malta","Marruecos","Mauricio","Mauritania","M??xico","Micronesia","Moldavia","M??naco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","N??ger","Nigeria","Noruega","Nueva Zelanda","Om??n","Pa??ses Bajos","Pakist??n","Palaos","Palestina","Panam??","Pap??a Nueva Guinea","Paraguay","Per??","Polonia","Portugal","Reino Unido","Rep??blica Centroafricana","Rep??blica Checa","Rep??blica de Macedonia","Rep??blica del Congo","Rep??blica Democr??tica del Congo","Rep??blica Dominicana","Rep??blica Sudafricana","Ruanda","Ruman??a","Rusia","Samoa","San Crist??bal y Nieves","San Marino","San Vicente y las Granadinas","Santa Luc??a","Santo Tom?? y Pr??ncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sud??n","Sud??n del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikist??n","Timor Oriental","Togo","Tonga","Trinidad y Tobago","T??nez","Turkmenist??n","Turqu??a","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekist??n","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]
	}

	get especialidades(){
		return [{id:1,value:'Dermatolog??a pedi??trica'},
		{id:2,value:'Adulto mayor'},
		{id:3,value:'Oncolog??a'},
		{id:4,value:'Otra'}]
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AppService } from 'src/app/config/app.service';
import { DiagnosticoBackendInterface, DiagnosticoFormInterface } from 'src/app/interfaces/diagnostico.interface';
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

  diagnosticoForm: FormGroup;
  casoMedicoId:string="";

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
      tipoLesion: [null],
      formaLesion: [null],
      numeroLesiones: [null],
      distribucion: [null],
      parteDelCuerpo: [null],
      casoMedicoAceptado: [false]
      });
      Object.keys(this.consulta.controls)
			.forEach(control=>{
				this.consulta.get(control)?.disable();
			}
			);

    let casoMedicoId = this.route.snapshot.paramMap.get('casoMedicoId');
	
	if(casoMedicoId){
		this.casoMedicoId = casoMedicoId;
		const casoMedico =this.authService.getCasoMedico(this.casoMedicoId)
		console.log(casoMedico);
		if(casoMedico){
			this.consulta.get('tipoLesion')?.setValue(casoMedico.tipoLesion?.id)
			this.consulta.get('formaLesion')?.setValue(casoMedico.formaLesion?.id)
			this.consulta.get('numeroLesiones')?.setValue(casoMedico.numeroLesiones?.id)
			this.consulta.get('distribucion')?.setValue(casoMedico.distribucion?.id)
			this.consulta.get('parteDelCuerpo')?.setValue(casoMedico.parteDelCuerpo)
		}else {
			this.erroObteniendoCasoMedico()
		}
	}else {
		this.erroObteniendoCasoMedico()
	}
   
    this.diagnosticoForm = this.fb.group({
      nombreLesion: [null,[Validators.required, Validators.minLength(6),Validators.maxLength(24)]],
      diagnostico: [null,[Validators.required, Validators.minLength(20),Validators.maxLength(200)]],
      tratamiento: [null,[Validators.required, Validators.minLength(20),Validators.maxLength(200)]]
      });
   }

  ngOnInit() {
  }

  async erroObteniendoCasoMedico(){
	const alert = await this.alertController.create({
		header: 'Error',
		message: 'Error obteniendo la informacion del caso medico',
		buttons: ['Aceptar']
	  });
	  await alert.present();
	this.router.navigateByUrl('/casos-medicos', { replaceUrl: true });
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
    }
  }

  async crearDiagnostico(){
    if (this.diagnosticoForm.invalid){
			Object.keys(this.diagnosticoForm.controls)
			.forEach(control=>{
				this.diagnosticoForm.get(control)?.markAllAsTouched();
			}
			);
		}else {
      		const loading = await this.loadingController.create();
			await loading.present();
			this.detalleConsultaService.crearDiagnostico(
				this.transformarParaBackend(this.diagnosticoForm.value))
				.subscribe({
				next: async (res) => {
					await loading.dismiss();
					const alert = await this.alertController.create({
						header: 'Creación de diagnostico',
						message: 'Creación de diagnostico exitoso',
						buttons: ['Aceptar']
					});
					await alert.present();
					this.router.navigateByUrl('/casos-medicos', { replaceUrl: true });
				},
				error: async (res) => {
					await loading.dismiss();
					const alert = await this.alertController.create({
						header: 'Creación de diagnostico',
						message: 'Hubo un error creando el diagnostico',
						buttons: ['Aceptar']
					});
					await alert.present();
				}}
			);
    }

  }

  transformarParaBackend(diagnosticoForm:DiagnosticoFormInterface):DiagnosticoBackendInterface{
	return{
		name_of_injury:diagnosticoForm.nombreLesion,
		diagnosis:diagnosticoForm.diagnostico,
		treatment:diagnosticoForm.tratamiento,
		medical_case_uuid:this.casoMedicoId,
		doctor_uuid:this.authService.user.uuid
	}
  }

  get casoMedicoAceptado() {
		return this.consulta.get('casoMedicoAceptado');
	}

  get nombreLesion() {
		return this.diagnosticoForm.get('nombreLesion');
	}

  get diagnostico() {
		return this.diagnosticoForm.get('diagnostico');
	}

  get tratamiento() {
		return this.diagnosticoForm.get('tratamiento');
	}

}

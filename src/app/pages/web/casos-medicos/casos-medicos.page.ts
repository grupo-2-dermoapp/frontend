import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CasosMedicosService } from './casos-medicos.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casos-medicos',
  templateUrl: './casos-medicos.page.html',
  styleUrls: ['./casos-medicos.page.scss'],
})
export class CasosMedicosPage implements OnInit {

  casos=[ {
    "name": "Will Smith",
    "descripcion": "descripcion"
},
{
    "name": "Jackline Joy",
    "descripcion": "descripcion"
},
{
    "name": "Alu Arjun",
    "descripcion": "descripcion"
},
{
    "name": "Kavitha Kumar",
    "descripcion": "descripcion"
},
{
    "name": "John Snow",
    "descripcion": "descripcion",
},
{
    "name": "Priya kanana",
    "descripcion": "descripcion"
},
{
    "name": "Shri Devi",
    "descripcion": "descripcion",
    "country": "descripcion"
},
{
    "name": "Richard Roy",
    "descripcion": "descripcion"
},
{
    "name": "Sonu Nigam",
    "descripcion": "descripcion",
},
{
    "name": "Priya Dutt",
    "descripcion": "descripcion",
}];
  filtroCasosMedicos:any=new Observable();
  casosMedicosForm: FormGroup;
  constructor(private casosMedicosService:CasosMedicosService,
    private authService:AuthService,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController,
    private fb: FormBuilder
    ) {
        this.casosMedicosForm = this.fb.group({
			casosMedicosCtrl: [null],
		});
     }

     busquedaCasosMedicos(){
        this.filtroCasosMedicos = this.casosMedicosForm.get('casosMedicosCtrl')?.valueChanges.pipe(
            startWith(''),
            map(casoMedico =>
                casoMedico ? this._filtroCasosMedicos(casoMedico) : this.casos
            )
          );
     }

    private _filtroCasosMedicos(value: any) {
    if (typeof value === 'string') {
        const valorFiltro = value.toLowerCase();
        return this.casos.filter(
        casosMedicos => {
            const filter = casosMedicos?.name.toLowerCase();
            return filter.includes(valorFiltro);
        }
        );
    }
    return "";

    }

    verDetalleCasoMedico(id:string){
        this.router.navigate(['/detalle-consulta', { casoMedicoId: id }]);
    }


  async ngOnInit() {
        this.busquedaCasosMedicos();
        /*const loading = await this.loadingController.create();
		await loading.present();
        this.casosMedicosService.obtenerCasosMedicos(this.authService.user.email)
        .subscribe({
            next: async (res) => {
                await loading.dismiss();
                this.casos=res.data;
            },
            error:async (res) => {
                await loading.dismiss();
                const alert = await this.alertController.create({
                    header: 'Error obteniendo los casos medicos',
                    message: res.error.error,
                    buttons: ['Aceptar']
                });
                await alert.present();
            }}
        );*/
  }

}

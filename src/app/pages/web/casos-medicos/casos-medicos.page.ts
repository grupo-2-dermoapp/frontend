import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CasosMedicosService } from './casos-medicos.service';

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
  constructor(private casosMedicosService:CasosMedicosService,
    private authService:AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController
    ) { }

  async ngOnInit() {
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

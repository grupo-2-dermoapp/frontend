import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ReportesService } from './reportes.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
  datosReporte: any;
  constructor(
    private reportesService: ReportesService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  async obternerReporte() {
    const loading = await this.loadingController.create({
      message: 'Obteniendo reporte',
    });
    await loading.present();
    this.reportesService.getReporte().subscribe({
      next: (res) => {
        console.log(res);
        loading.dismiss();
        this.datosReporte = res;
      },
      error: (err) => {
        console.log(err);
        loading.dismiss();
        this.erroObteniendoReporte();
      },
    });
  }

  async erroObteniendoReporte() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Error obteniendo el reporte',
      buttons: ['Aceptar'],
    });
    await alert.present();
    this.router.navigateByUrl('/inicio', { replaceUrl: true });
  }
}

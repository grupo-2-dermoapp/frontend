import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  notificaciones: any[] = [];
  constructor(
    private authService: AuthService,
    private notificacionesService: NotificacionesService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Obteniendo agenda del medico',
    });
    await loading.present();
    this.notificacionesService
      .getNotificaciones(this.authService.user.uuid)
      .subscribe({
        next: (res) => {
          console.log(res);
          loading.dismiss();
        },
        error: (err) => {
          console.log(err);
          this.erroObteniendoNotificaciones();
          loading.dismiss();
        },
      });
  }

  async erroObteniendoNotificaciones() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Error obteniendo notificaciones',
      buttons: ['Aceptar'],
    });
    await alert.present();
    this.router.navigateByUrl('/inicio', { replaceUrl: true });
  }
}

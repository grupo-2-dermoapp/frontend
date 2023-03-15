import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AppService } from 'src/app/config/app.service';
import { NotificacionInterface } from 'src/app/interfaces/notificacion.interface';
import { AuthService } from 'src/app/services/auth.service';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  notificaciones: NotificacionInterface[] = [];
  constructor(
    private authService: AuthService,
    private notificacionesService: NotificacionesService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router,
    private appService: AppService
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

          this.notificaciones = res.notifications;
          this.transformarNombreParteDelCuerpo(this.notificaciones);
          loading.dismiss();
        },
        error: (err) => {
          console.log(err);
          this.erroObteniendoNotificaciones();
          loading.dismiss();
        },
      });
  }

  transformarNombreParteDelCuerpo(notificaciones: NotificacionInterface[]) {
    notificaciones.forEach((notificacion) => {
      const text = notificacion.message.split('BodyPart.');
      const parteDelCuerpo = text[1].split(' ')[0];
      console.log(parteDelCuerpo);
      this.appService.obtenerParteCuerpoPorId(parteDelCuerpo);
      notificacion.message =
        text[0] +
        this.appService.obtenerParteCuerpoPorId(parteDelCuerpo) +
        ' ha sido realizado';
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

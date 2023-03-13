import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { filter, Observable } from 'rxjs';
import { AppService } from './config/app.service';
import { AuthService } from './services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  public appPages = [{ title: '', url: '', icon: '' }];
  private isPhone = false;
  private navEnd: Observable<NavigationEnd>;
  public showMenu = false;
  lang : string = 'es';

  constructor(
    private alertController: AlertController,
    private appService: AppService,
    private router: Router,
    private authService: AuthService,
    public translate: TranslateService
  ) {
    this.isPhone = this.appService.isPhone;
    this.navEnd = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
    this.loadSidemenu();
    translate.addLangs(['en']);
    translate.setDefaultLang('es');
    translate.use(this.lang.match(/en/) ? this.lang : 'es');
  }

  async ngOnInit() {
    this.navEnd.subscribe((evt) => {
      this.showMenu =
        evt.url !== '/' &&
        evt.url !== '/login' &&
        evt.url !== '/registro' &&
        evt.url !== '/registro-medico';
    });

    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      console.log('Push registration success, token: ', token.value);
      this.authService.pushNotificationToken = token.value;
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error: any) => {
      console.error('Error on registration: ', JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        console.log('Push received: ', notification);
        const alert = await this.alertController.create({
          header: notification.title,
          message: notification.body,
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }

  navigateTo(url: string) {
    let navigationComand: any[] = [url];
    if (url === '/login') {
      this.authService.logout();
    } else if (this.isPhone && url === '/consultas') {
      navigationComand.push({ pacienteId: this.authService.user.uuid });
    }
    this.router.navigate(navigationComand, { replaceUrl: true });
  }

  loadSidemenu() {
    if (this.isPhone) {
      this.appPages = [
        { title: 'Inicio', url: '/inicio', icon: 'home' },
        { title: 'Consultas', url: '/consultas', icon: 'medkit' },
        {
          title: 'Notificaciones',
          url: '/notificaciones',
          icon: 'notifications',
        },
      ];
    } else {
      this.appPages = [
        { title: 'Inicio', url: '/inicio', icon: 'home' },
        { title: 'Casos Médicos', url: '/casos-medicos', icon: 'clipboard' },
        {
          title: 'Historias clinicas',
          url: '/historias-clinicas',
          icon: 'medical',
        },
        { title: 'Reportes', url: '/reportes', icon: 'bar-chart' },
        { title: 'Agenda', url: '/agenda', icon: 'calendar' },
      ];
    }
  }

  changeLanguage() {
    this.alertController
      .create({
        header: 'Cambiar idioma',
        inputs: [
          {
            type: 'radio',
            label: 'Español (Colombia)',
            value: 'es',
          },
          {
            type: 'radio',
            label: 'Inglés',
            value: 'en',
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: (data: any) => {
              console.log('Canceled', data);
            },
          },
          {
            text: 'Cambiar',
            handler: (data: any) => {
              console.log('Selected Information', data);
              this.translate.use(data);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}

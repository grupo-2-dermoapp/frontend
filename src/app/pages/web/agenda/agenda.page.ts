import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AgendaInterface } from 'src/app/interfaces/agenda.interface';
import { AuthService } from 'src/app/services/auth.service';
import { AgendaService } from './agenda.service';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  eventos: AgendaInterface[] = [];

  constructor(
    private authService: AuthService,
    private agendaService: AgendaService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Obteniendo agenda del medico',
    });
    await loading.present();
    this.agendaService.getAgenda(this.authService.user.uuid).subscribe({
      next: (res) => {
        console.log(res);
        this.obtenerAgendaMedico(res.agenda.events);
        loading.dismiss();
      },
      error: (err) => {
        console.log(err);
        this.erroObteniendoAgendaMedico();
        loading.dismiss();
      },
    });
  }

  async erroObteniendoAgendaMedico() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Error obteniendo la agenda del medico',
      buttons: ['Aceptar'],
    });
    await alert.present();
    this.router.navigateByUrl('/inicio', { replaceUrl: true });
  }

  async obtenerAgendaMedico(eventos: string[]) {
    eventos.forEach((evento) => {
      this.agendaService.getEvento(evento).subscribe({
        next: (res) => {
          this.eventos.push(res.event);
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
}

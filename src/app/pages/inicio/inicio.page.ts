import { Component } from '@angular/core';
import { AppService } from 'src/app/config/app.service';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  {
  isPhone = false;
  user:UserInterface;
  constructor(private appService:AppService,private authService:AuthService) {
    this.user=this.authService.user;
    this.isPhone = this.appService.isPhone;
   }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroMedicoPageRoutingModule } from './registro-medico-routing.module';
import { RegistroMedicoPage } from './registro-medico.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMedicoPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [RegistroMedicoPage]
})

export class RegistroMedicoPageModule {}

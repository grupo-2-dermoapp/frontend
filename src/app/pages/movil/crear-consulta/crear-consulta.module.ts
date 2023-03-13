import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CrearConsultaPageRoutingModule } from './crear-consulta-routing.module';
import { CrearConsultaPage } from './crear-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearConsultaPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [CrearConsultaPage]
})
export class CrearConsultaPageModule {}

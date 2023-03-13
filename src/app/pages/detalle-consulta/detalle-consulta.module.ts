import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalleConsultaPageRoutingModule } from './detalle-consulta-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { DetalleConsultaPage } from './detalle-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleConsultaPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [DetalleConsultaPage]
})
export class DetalleConsultaPageModule {}

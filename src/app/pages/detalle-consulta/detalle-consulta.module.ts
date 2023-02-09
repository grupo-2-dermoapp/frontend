import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleConsultaPageRoutingModule } from './detalle-consulta-routing.module';

import { DetalleConsultaPage } from './detalle-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleConsultaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetalleConsultaPage]
})
export class DetalleConsultaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HistoriasClinicasPageRoutingModule } from './historias-clinicas-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HistoriasClinicasPage } from './historias-clinicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriasClinicasPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [HistoriasClinicasPage],
})
export class HistoriasClinicasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CasosMedicosPageRoutingModule } from './casos-medicos-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CasosMedicosPage } from './casos-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasosMedicosPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [CasosMedicosPage]
})
export class CasosMedicosPageModule {}

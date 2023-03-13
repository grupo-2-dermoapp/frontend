import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConsultasPageRoutingModule } from './consultas-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ConsultasPage } from './consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasPageRoutingModule,
    TranslateModule
  ],
  declarations: [ConsultasPage]
})
export class ConsultasPageModule {}

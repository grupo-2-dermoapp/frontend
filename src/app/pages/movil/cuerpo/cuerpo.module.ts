import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { CuerpoPageRoutingModule } from './cuerpo-routing.module';
import { CuerpoPage } from './cuerpo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuerpoPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [CuerpoPage]
})
export class CuerpoPageModule {}

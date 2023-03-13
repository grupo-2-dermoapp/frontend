import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilPaso1PageRoutingModule } from './perfil-dermatologico-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { PerfilDermatologicoPage } from './perfil-dermatologico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPaso1PageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [PerfilDermatologicoPage]
})
export class PerfilDermatologicoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroRutinasPageRoutingModule } from './registro-rutinas-routing.module';

import { RegistroRutinasPage } from './registro-rutinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroRutinasPageRoutingModule
  ],
  declarations: [RegistroRutinasPage]
})
export class RegistroRutinasPageModule {}

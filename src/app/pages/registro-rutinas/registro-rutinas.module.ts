import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroRutinasPageRoutingModule } from './registro-rutinas-routing.module';

import { RegistroRutinasPage } from './registro-rutinas.page';
import { FirstLetterPipe } from 'src/app/pipes/first-letter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroRutinasPageRoutingModule
  ],
  declarations: [RegistroRutinasPage, FirstLetterPipe]
})
export class RegistroRutinasPageModule {}

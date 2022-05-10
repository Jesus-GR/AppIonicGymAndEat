import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroRutinasPage } from './registro-rutinas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroRutinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRutinasPageRoutingModule {}

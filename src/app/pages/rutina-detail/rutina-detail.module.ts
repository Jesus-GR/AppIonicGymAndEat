import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaDetailPageRoutingModule } from './rutina-detail-routing.module';

import { RutinaDetailPage } from './rutina-detail.page';
import { FilterByDayPipe } from 'src/app/filter-by-day.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaDetailPageRoutingModule
  ],
  declarations: [RutinaDetailPage, FilterByDayPipe]
})
export class RutinaDetailPageModule {}

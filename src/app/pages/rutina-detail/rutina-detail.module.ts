import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaDetailPageRoutingModule } from './rutina-detail-routing.module';

import { RutinaDetailPage } from './rutina-detail.page';
import { FilterByDayPipe } from 'src/app/pipes/filter-by-day.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaDetailPageRoutingModule,
    ScrollingModule
  ],
  declarations: [RutinaDetailPage, FilterByDayPipe]
})
export class RutinaDetailPageModule {}

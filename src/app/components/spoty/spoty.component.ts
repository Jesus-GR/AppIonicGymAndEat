import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song';
import { SpotyService } from 'src/app/services/spoty.service';

@Component({
  selector: 'app-spoty',
  templateUrl: './spoty.component.html',
  styleUrls: ['./spoty.component.scss'],
})
export class SpotyComponent implements OnInit {

  query: string;
  songs: Song[] = [];
  data: any = {};

  constructor(private spotyService: SpotyService) { }

  ngOnInit() {}

  getData(){
      this.spotyService.obtenerDatos(this.query).subscribe(d => {this.data = d; console.log(this.data);});
  }
}

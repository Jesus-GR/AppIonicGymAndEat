/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { resolve } from 'dns';
import { Observable } from 'rxjs';
import { Ejercicio } from 'src/app/model/ejercicio';
import { Rutina } from 'src/app/model/rutina';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-rutina-detail',
  templateUrl: './rutina-detail.page.html',
  styleUrls: ['./rutina-detail.page.scss'],
})
export class RutinaDetailPage implements OnInit {
  rutina: Rutina = {};
  arrayEjercicios: Ejercicio[] =[];
  lunes: any[] = [];
  martes: any[] = [];
  miercoles: any[] = [];
  jueves: any[] = [];
  viernes: any[] = [];
  sabado: any[] = [];
  domingo: any[] = [];


  constructor(private activatedRouter: ActivatedRoute,
              private rutinaService: RutinaService,
              private router: Router) { }

  ngOnInit() {
    const ID = this.activatedRouter.snapshot.paramMap.get('id');
    if(ID != null){
      this.rutinaService.getRutina(ID).subscribe(data => this.rutina = data);
    }
    this.lunes.push(this.rutina.ejercicios.filter(dia => dia.diaSemana === 'lunes'));
  }
  goToFood() {
    this.router.navigateByUrl('food');
  }
  goToGym(){
    this.router.navigateByUrl('routines');
  }
  }


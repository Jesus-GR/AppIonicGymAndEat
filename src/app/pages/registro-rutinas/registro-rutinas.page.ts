/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, Input, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/model/ejercicio';
import { Rutina } from 'src/app/model/rutina';

@Component({
  selector: 'app-registro-rutinas',
  templateUrl: './registro-rutinas.page.html',
  styleUrls: ['./registro-rutinas.page.scss'],
})
export class RegistroRutinasPage implements OnInit {
  @Input()
  diaSemana: string;
  @Input()
  grupoMuscular: string;
  @Input()
  nombreEjercicio: string;
  @Input()
  numSeries?: number;
  @Input()
  numRepeticiones: number;
  @Input()
  kilos?: number;

  isModalOpen: boolean;
  rutina: Rutina;
  ejercicio: Ejercicio;
  constructor() { }

  ngOnInit() {
  }

  openOrCloseModal(){
    this.isModalOpen = !this.isModalOpen;
  }

  saveRoutine(){
    this.rutina.diaSemana === this.diaSemana;
    this.ejercicio.grupoMuscular === this.grupoMuscular;
    this.ejercicio.numeroSeries === this.numSeries;
    this.ejercicio.numeroRepeticiones === this.numRepeticiones;
    this.ejercicio.peso === this.kilos;
    this.rutina.ejercicios.push(this.ejercicio);
    this.isModalOpen = !this.isModalOpen;
    console.log('Rutina',this.rutina.diaSemana);
  }

}

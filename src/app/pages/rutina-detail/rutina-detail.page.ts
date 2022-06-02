/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable prefer-const */
/* eslint-disable curly */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable eqeqeq */
/* eslint-disable eol-last */
/* eslint-disable max-len */
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { resolve } from 'dns';
import { Observable, of } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { FilterByDayPipe } from 'src/app/filter-by-day.pipe';
import { Ejercicio } from 'src/app/model/ejercicio';
import { Rutina } from 'src/app/model/rutina';
import { RutinaService } from 'src/app/services/rutina.service';

@Component({
  selector: 'app-rutina-detail',
  templateUrl: './rutina-detail.page.html',
  styleUrls: ['./rutina-detail.page.scss'],
})
export class RutinaDetailPage implements OnInit {
  rutina: Rutina = {
    ejercicios: []
  };
  arrayEjercicios: any[] = [];
  isModalOpen: boolean;
  diasSemana: string[] = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
  diaSeleccionado: string;
  esCargada = false;
  pesos: number[] = [];
  pesoUno: number;
  pesoDos: number;
  pesoTres: number;
  pesoCuatro: number;
  pesoCinco: number;
  pesoSeis: number;
  editMode = 'view';

  arrayContador = new Array(8);
   hours = 0;
   minutes = 0;
   seconds = 0;
   timer: any;
   date = new Date();
   show = true;
   disabled = false;
   animate = false;

  constructor(private activatedRouter: ActivatedRoute,
              private rutinaService: RutinaService,
              private router: Router,
              ) { }


  ngOnInit() {
    const ID = this.activatedRouter.snapshot.paramMap.get('id');
    if (ID != null) {
      this.rutinaService.getRutina(ID).subscribe(data => {this.rutina = data; });
    }
}

  goToFood() {
    this.router.navigateByUrl('food');
  }
  goToGym() {
    this.router.navigateByUrl('routines');
  }

  showModal(d: string) {
    this.diaSeleccionado = d;
    this.isModalOpen = !this.isModalOpen;
    this.rutina.ejercicios.forEach(x => x.registroPesos = []);
  }



  hayRutinEnDia(dia: string): boolean{
    let existeDia = false;
    this.rutina.ejercicios.forEach(
      e => {
        if (e.diaSemana === dia) {
           existeDia = true;
        }
      });
      return existeDia;
  }

  increment(type: 'H' | 'M' | 'S') {
    if (type === 'H') {
      if (this.hours >= 99) return;
      this.hours += 1;
    }
    else if (type === 'M') {
      if (this.minutes >= 59) return;
      this.minutes += 1;
    }
    else {
      if (this.seconds >= 59) return;
      this.seconds += 1;
    }
  }
  decrement(type: 'H' | 'M' | 'S') {
    if (type === 'H') {
      if (this.hours <= 0) return;
      this.hours -= 1;
    }
    else if (type === 'M') {
      if (this.minutes <= 0) return;
      this.minutes -= 1;
    }
    else {
      if (this.seconds <= 0) return;
      this.seconds -= 1;
    }
  }

  updateTimer() {
    this.date.setHours(this.hours);
    this.date.setMinutes(this.minutes);
    this.date.setSeconds(this.seconds);
    this.date.setMilliseconds(0);
    const time = this.date.getTime();
    this.date.setTime(time - 1000);  //---

    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();

    if (this.date.getHours() === 0 &&
      this.date.getMinutes() === 0 &&
      this.date.getSeconds() === 0) {
      //stop interval
      clearInterval(this.timer);
      this.animate = true;
      setTimeout(() => {
        this.stop();
      }, 5000);

    }
  }

  start() {
    if (this.hours > 0 || this.minutes > 0 || this.seconds > 0) {

      this.disabled = true;
      this.show = false;  //hide btn + and -
      this.updateTimer();

      if(this.seconds > 0){
        this.timer = setInterval(() => {
          this.updateTimer();
        }, 1000);
      }
    }
  }

  stop() {
    this.disabled = false;
    this.show = true;
    this.animate = false;
    clearInterval(this.timer);
  }

  reset() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.stop();
  }

  guardarEjercicio(){
     this.rutina.ejercicios.find(x => {
       if(x.pesoMaximo < Math.max(...x.registroPesos) && x.pesoMaximo != 0){
        x.pesoMaximo = Math.max(...x.registroPesos);
        this.rutinaService.updateRutina(this.rutina);
        this.isModalOpen = !this.isModalOpen;
       }else{
        this.isModalOpen = !this.isModalOpen;
       }
     });
  }
}

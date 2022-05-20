/* eslint-disable eol-last */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { resolve } from 'dns';
import { Observable, of } from 'rxjs';
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
  constructor(private activatedRouter: ActivatedRoute,
    private rutinaService: RutinaService,
    private router: Router) { }

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
}

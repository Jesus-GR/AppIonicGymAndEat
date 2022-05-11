/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ejercicio } from 'src/app/model/ejercicio';
import { Rutina } from 'src/app/model/rutina';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { RutinaService } from 'src/app/services/rutina.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro-rutinas',
  templateUrl: './registro-rutinas.page.html',
  styleUrls: ['./registro-rutinas.page.scss'],
})
export class RegistroRutinasPage implements OnInit {

  isModalOpen: boolean;
  displayProductForm: boolean;
  rutina: Rutina = {};
  ejercicio: Ejercicio = {};
  ejercicios: Ejercicio[] = [];
  usuario: Usuario;

  nombreRutina: string;
  nombreEjercicio: string;
  numeroSeries: number;
  numeroRepeticiones: number;
  peso: number;
  gupoMuscular: string;

  constructor(private rutinaService: RutinaService,
              private usuarioService: UsuarioService,
              private auth: AuthService ) {

   }

  ngOnInit() {
    this.usuario = this.auth.getCurrentUser();
    console.log('Este es el usuario',this.usuario);
  }

  openOrCloseModal(){
    this.isModalOpen = !this.isModalOpen;
    this.nombreEjercicio = '';
    this.numeroSeries = null;
    this.numeroRepeticiones = null;
    this.peso = null;
  }


  onSubmit() {
    this.ejercicio.nombreEjercicio = this.nombreEjercicio;
    this.ejercicio.numeroSeries = this.numeroSeries;
    this.ejercicio.numeroRepeticiones = this.numeroRepeticiones;
    this.ejercicio.peso = this.peso;
    this.ejercicio.grupoMuscular = this.gupoMuscular;
    this.ejercicios.push(this.ejercicio);
    this.isModalOpen = !this.isModalOpen;
    this.ejercicio = {};
}

  submitRutina(){
   // this.rutina.ejercicios = this.ejercicios;
    this.rutinaService.addProduct(this.rutina);

  }
}

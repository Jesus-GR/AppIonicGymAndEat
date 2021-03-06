/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Ejercicio } from 'src/app/model/ejercicio';
import { Rutina } from 'src/app/model/rutina';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { RutinaService } from 'src/app/services/rutina.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private rutinaService: RutinaService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  openOrCloseModal() {
    this.isModalOpen = !this.isModalOpen;
    this.ejercicio = {};
  }

  onSubmit() {
    this.ejercicio.registroPesos = [];
    this.ejercicio.pesoMaximo = null;
    this.ejercicios.push(this.ejercicio);
    this.isModalOpen = !this.isModalOpen;
    this.ejercicio = {};
  }

  submitRutina() {
    this.rutina.usuarioID = this.auth.getCurrentUser().uid;
    this.rutina.ejercicios = this.ejercicios;
    this.rutinaService.addUserRutina(this.rutina);
    this.router.navigateByUrl('/routines');
  }

  goToRoutines() {
    this.router.navigateByUrl('/routines');
  }
}

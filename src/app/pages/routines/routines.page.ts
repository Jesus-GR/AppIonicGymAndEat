/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.page.html',
  styleUrls: ['./routines.page.scss'],
})
export class RoutinesPage implements OnInit {

  constructor(public usuarioService: UsuarioService,
              private router: Router) { }
  isModalOpen: boolean;
  ngOnInit() {
  }

  changeModal(){
    this.isModalOpen = !this.isModalOpen;
  }
  goToRoutines(){
    this.router.navigateByUrl('/registro-rutinas');
  }

}

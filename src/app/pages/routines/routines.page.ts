/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rutina } from 'src/app/model/rutina';
import { AuthService } from 'src/app/services/auth.service';
import { RutinaService } from 'src/app/services/rutina.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.page.html',
  styleUrls: ['./routines.page.scss'],
})
export class RoutinesPage implements OnInit {
  rutinas: Rutina[] = [];
  constructor(public usuarioService: UsuarioService,
              private router: Router,
              public rutinaService: RutinaService,
              private auth: AuthService) { }
  isModalOpen: boolean;

  ngOnInit() {
    this.rutinaService.getRutinas().subscribe(data => this.rutinas = data);
    console.log(this.auth.getCurrentUser().uid);
    console.log(this.rutinas);
  }

  goToRoutines(){
    this.router.navigateByUrl('/registro-rutinas');
  }

  goToRutinaDetail(id: string){
  }

}


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
  // eslint-disable-next-line @typescript-eslint/member-ordering
  isModalOpen: boolean;

  ngOnInit() {
    this.rutinaService.getRutinas().subscribe(data => this.rutinas = data);
  }

  goToRoutines(){
    this.router.navigateByUrl('/registro-rutinas');
  }

  deleteRoutines(id: string){
    this.rutinaService.deleteRutina(id);
  }

  goToUser(){
    this.router.navigateByUrl('/usuario');
  }
  goToFood(){
    this.router.navigateByUrl('/food');
  }

}

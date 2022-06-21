import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isPopoverOpen = false;
  user: Usuario = {
    uid: '',
    email: '',
    password: '',
    nombre: '',
    edad: '',
    peso: 0,
    altura: 0,
    imc: 0,
    image: '',
    pesoMaximo: 0,
  };
  users: Usuario[] = [];
  constructor(public authService: AuthService,
              public router: Router,
              public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe(data => {
      this.users = data;
      this.user = this.users[0];
    });
  }

  goToUser(){
    this.router.navigateByUrl('/usuario');
  }

  mostrarPopover(){
    this.isPopoverOpen = !this.isPopoverOpen;
  }
  deleteUser(){
    this.authService.deleteUserAuth();
  }

}

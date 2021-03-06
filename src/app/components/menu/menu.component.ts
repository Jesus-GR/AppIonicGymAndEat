/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuController } from '@ionic/core';
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
  }

  goToUser(){
    this.router.navigateByUrl('/usuario');
    this.closeMenu();
  }

  mostrarPopover(){
    this.isPopoverOpen = !this.isPopoverOpen;
  }

  /**
   * Borrar usuario
   */
  async deleteUser(){
    this.isPopoverOpen = false;
    await this.authService.deleteUserAuth().then(()=>{
      this.closeMenu();
    });
  };

  async closeMenu(){
    menuController.close();
  }

  async logOut(){
    this.authService.logout();
    this.closeMenu();
  }

}

/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuario: Usuario = {};

  constructor(
    public router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService) {}


  peso: number;

  edad: string;

  imc: number;

  ngOnInit() {
    //this.usuarioService.getUsuFromStorage().then(data => this.usuario = data);
  }

  /*cambiarDatos(){
    this.usuarioService.saveUsuario(this.usuario);
  }*/
  goToFood() {
    this.router.navigateByUrl('food');
  }
  goToUser() {
    this.router.navigateByUrl('usuario');
  }
  goHome() {
    this.router.navigateByUrl('fav');
  }
  goToGym(){
    this.router.navigateByUrl('routines');
  }
  /*eliminarUsuario(){
    this.usuarioService.deleteUsuario();
    this.ngOnInit();
    this.router.navigateByUrl('registro');
  }*/

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('welcome');
  }

}

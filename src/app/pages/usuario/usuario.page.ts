/* eslint-disable @typescript-eslint/no-unused-expressions */
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
  user: Usuario = {};
  users: Usuario[] = [];
  currentUserId: string;
  showModal: boolean;
  constructor(
    public router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService) {

      this.currentUserId = this.authService.getCurrentUser().uid;
      //this.user = this.authService.getCurrentUser();
        }

  ngOnInit() {

  }

  goToFood() {
    this.router.navigateByUrl('food');
  }
  goToGym(){
    this.router.navigateByUrl('routines');
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('welcome');
  }

  addUser(){
    /*this.user.uid = 'Mierda de app';
    this.user.nombre = 'usu2';
    this.user.email = this.authService.getCurrentUser().email;
    this.user.edad = '3';
    this.usuarioService.addUser(this.user);*/
    this.usuarioService.getUsers().subscribe(data => this.users = data);
    console.log(this.users);
    this.usuarioService.getUser('uCVygcm7dvGUUgoOxjAz').subscribe(data => this.user = data);
    console.log(this.user);

  }

}

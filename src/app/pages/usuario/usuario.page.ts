/* eslint-disable max-len */
/* eslint-disable eqeqeq */
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
  imagen = 'assets/blank-profile-picture-g37dc4bba4_1280.png';
  constructor(
    public router: Router,
    public usuarioService: UsuarioService,
    private authService: AuthService) {

      this.currentUserId = this.authService.getCurrentUser().uid;
        }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe(data => {this.users = data;
       this.user = this.users[0];
       if(this.user.image != ''){
         this.user.image = this.imagen;
       }
      });

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
}

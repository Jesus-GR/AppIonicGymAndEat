/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario: Usuario = {};

  @Input()
  email: string;
  @Input()
  password: string;

  constructor(public router: Router,
              private authService: AuthService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  register() {
    this.usuario.email == this.email;
    this.usuario.password == this.password;
    this.usuarioService.addProduct(this.usuario);
    this.authService.register(this.email, this.password)
    .then(()=> this.router.navigateByUrl('usuario'));
  }

}

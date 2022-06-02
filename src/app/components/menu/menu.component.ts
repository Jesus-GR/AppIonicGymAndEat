import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isPopoverOpen = false;
  constructor(public authService: AuthService,
              public router: Router,
              public usuarioService: UsuarioService) { }

  ngOnInit() {}

  goToUser(){
    this.router.navigateByUrl('/usuario');
  }

  mostrarPopover(){
    this.isPopoverOpen = !this.isPopoverOpen;
  }
  deleteUsuario(){
    this.usuarioService.deleteUser(this.authService.getCurrentUser().uid);
    console.log(this.authService.getCurrentUser().uid);
    this.mostrarPopover();
    this.router.navigateByUrl('/welcome');
  }

}

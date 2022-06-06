/* eslint-disable id-blacklist */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins } from '@capacitor/core';
import { CameraService } from 'src/app/services/camera.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  photoPath: SafeResourceUrl;

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
  currentUserId: string;
  showModal: boolean;
  imagen = 'assets/blank-profile-picture-g37dc4bba4_1280.png';
  isModalOpen: boolean;
  constructor(
    public router: Router,
    public usuarioService: UsuarioService,
    private authService: AuthService,
    private cameraService: CameraService) {

    this.currentUserId = this.authService.getCurrentUser().uid;
  }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe(data => {
      this.users = data;
      this.user = this.users[0];
      if (this.user.image != '') {
        this.user.image = this.imagen;
      }
    });

  }

  goToFood() {
    this.router.navigateByUrl('food');
  }
  goToGym() {
    this.router.navigateByUrl('routines');
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('welcome');
  }

  openCloseModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  async takePicture() {
    const image = await this.cameraService.takePicture();
   this.photoPath  = image;
   this.user.image = image;

  }

}

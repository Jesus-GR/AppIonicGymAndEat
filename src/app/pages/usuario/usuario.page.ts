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
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CameraService } from 'src/app/services/camera.service';
import { Photo } from 'src/app/model/photo';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  photoPath: SafeResourceUrl;
  photo: Photo;
  image: any;
  select = false;
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
    private cameraService: CameraService,
    ) {

    this.currentUserId = this.authService.getCurrentUser().uid;
  }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe(data => {
      this.users = data;
      this.user = this.users[0];
      if (this.user.image == '') {
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

  async browsePhoto() {
    const path = 'uploads/';
    this.image = await this.cameraService.takePicture();
    const res = await this.cameraService.uploadFile(this.image, path);
    this.image = res;
    this.user.image = res;
    console.log(res);

    this.usuarioService.updateUser(this.user);
  }

  addPhoto() {
    this.photo.formato = this.image;
    this.cameraService.addPhoto(this.photo);
    this.select = false;
  }

}

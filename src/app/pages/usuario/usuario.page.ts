/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
//import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
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
  photoPath: SafeResourceUrl;
  constructor(
    public router: Router,
    public usuarioService: UsuarioService,
    private authService: AuthService,
    private sanitizer: DomSanitizer) {

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

  /*async takePicture() {
    const image = await Plugins.Camera.getPhoto({
    quality: 60,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera
    });
    this.photoPath = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
    }
*/
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

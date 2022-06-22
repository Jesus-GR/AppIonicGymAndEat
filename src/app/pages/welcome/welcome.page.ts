import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FatSecretService } from 'src/app/providers/fat-secret.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  @Input()
  email: string;
  @Input()
  pass: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {}

  async login() {
    const connectionSuccess = await this.authService.login(this.email, this.pass);
    if (connectionSuccess === true) {
      this.router.navigateByUrl('/usuario');
      console.log(connectionSuccess);
    } else {
      console.log(connectionSuccess);
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
    header: 'Conexión fallida',
    subHeader: 'No se ha podido acceder a la cuenta.',
    message: 'El correo electrónico y la contraseña proporcionados no son válidos.',
    buttons: ['Aceptar']
    });
    await alert.present();
    }

  logout() {
    this.authService.logout();
  }

  goToRegister(){
    this.router.navigateByUrl('/registro');
  }

  goToResetPasword(){
    this.router.navigateByUrl('/reset-password');
  }
}

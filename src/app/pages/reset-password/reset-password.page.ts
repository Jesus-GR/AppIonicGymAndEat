import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  resetPassword() {
    this.authService.resetPassword(this.email)
      .then(() => {
        this.alertResetPassword();
        this.router.navigateByUrl('/welcome');
      })
      .catch(() => this.alertError());
  }

  async alertResetPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: `Se le ha enviado un correo electrónico con un enlace
      que le permitirá recuperar la contraseña.`,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
  async alertError() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: `No se ha podido enviar el correo de restauración de contraseña.
      Inténtelo de nuevo más tarde.`,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}

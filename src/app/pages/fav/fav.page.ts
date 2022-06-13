/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/model/food';
import { FoodService } from 'src/app/services/food.service';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { FatSecret } from 'src/app/model/fat-secret';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {
  favoritos: FatSecret[] =[];
  esDesplegado = false;
  isPopoverOpen = false;
  constructor(private foodService: FoodService,
    public router: Router,
    private alertController: AlertController) {}

  ngOnInit() {
    this.foodService.getFavorites().subscribe(data => this.favoritos = data);
  }

  cambiarEsDesplegado(){
    this.esDesplegado = !this.esDesplegado;
  }
  async presentAlertConfirma(f: FatSecret) {
    const alert = await this.alertController.create({
      header: 'Eliminar favorito',
      message: `¿Estás seguro que deseas borrar <strong>${f.name}</
strong> de la lista de favoritos?`,
buttons: [ {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
console.log('Confirm Cancel: blah');
} }, {
          text: 'Okay',
          handler: () => {
            this.deleteFavorites(f.name);
            this.ngOnInit();
          }
} ]
});
    await alert.present();
  }

  deleteFavorites(name: string){
    this.foodService.deleteFavorites(name);
  }
  goToFood(){
    this.router.navigateByUrl('/food');
  }
  goToUser(){
    this.router.navigateByUrl('usuario');
  }

  async presentAlertConfirm(a: FatSecret) {
    const alert = await this.alertController.create({
      cssClass: 'alertClass',
      header: `Nombre: ${a.name.toLocaleUpperCase()}`,
      message: `Valor por 100g <br>
     <strong>Calorías</strong>: ${a.calories}<br>
     <strong>Grasas</strong>: ${a.fat_total_g}<br>
     <strong>Carbohidratos</strong>:${a.carbohydrates_total_g}<br>
     <strong>Azucar</strong>:${a.sugar_g}<br>
     <strong>Fibra</strong>: ${a.fiber_g}<br>
     <strong>Proteina</strong>:${a.protein_g}<br>
     <strong>Sal</strong>:${a.sodium_mg}<br>
     <strong>Colesteror</strong>:${a.cholesterol_mg}<br>`
      ,
buttons: [ {
          text: 'Volver',
          cssClass: 'buttonBack',
          handler: (blah) => {
console.log('Confirm Cancel: blah');
} }]
});
    await alert.present();
  }

  openPopover(f: FatSecret){
    this.isPopoverOpen = !this.isPopoverOpen;
  }
}

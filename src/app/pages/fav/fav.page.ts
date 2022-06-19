/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  food: FatSecret = {
    id: 0,
    name: '',
    calories: 0,
    serving_size_g: 0,
    fat_total_g: 0,
    fat_saturated_g: 0,
    protein_g: 0,
    sodium_mg: 0,
    potassium_mg: 0,
    cholesterol_mg: 0,
    carbohydrates_total_g: 0,
    fiber_g: 0,
    sugar_g: 0
  };
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


  openPopoverWithFood(f: FatSecret){
    this.food = f;
    console.log(this.food);
    this.isPopoverOpen = !this.isPopoverOpen;
  }

  openPopover(){
    this.isPopoverOpen = !this.isPopoverOpen;
  }
}

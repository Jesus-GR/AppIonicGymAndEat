/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FatSecret } from 'src/app/model/fat-secret';
import { FatSecretService } from 'src/app/providers/fat-secret.service';
import { FoodService } from 'src/app/services/food.service';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  query = '';
  food: FatSecret = {
    id:0,
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

  constructor(public fatSecretService: FatSecretService,
              private router: Router,
              private foodService: FoodService ) { }

  ngOnInit() {
  }

  goToUser(){
    this.router.navigateByUrl('/usuario');
  }
  goToFavs(){
    this.router.navigateByUrl('/fav');
  }

  obtenerDatos(){
    this.query !== ''? this.fatSecretService.obtenerDatos(this.query).pipe(debounceTime(1000)).subscribe(f =>{this.food = f[0];})
     : this.food = {
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
  }

guardarEnFavs(food: any){
  this.foodService.saveFav(food);
}
}

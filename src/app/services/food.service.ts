/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Injectable, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Storage } from '@capacitor/storage';
import { FatSecret } from '../model/fat-secret';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  favorites: FatSecret[] = [];
  favoriteCounter = 0;
  constructor(private http: HttpClient) {
    this.getFavFromStorage().then(data => this.favorites = data);
    this.getFavCounterFromStorage().then(data => this.favoriteCounter = data);
    console.log(this.favorites);
  }
  public ngOnInit = () => { };

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>('../assets/foods.json');
  }

  getFavorites(): Observable<FatSecret[]> {
    return of(this.favorites);
  }


  async deleteFavorites(name: string): Promise<boolean>{

    this.favorites = this.favorites.filter(data => data.name !== name);
    await this.saveFavIntoStorage();
    await this.saveFavCounterIntoStorage();
    return true;
  }

  async saveFav(favorite: FatSecret): Promise<boolean> {
    var contador = 0;
    if(this.favorites.length > 0){
       this.favorites.forEach(n => {if(n.name! === favorite.name){contador++;};});

    if(contador === 0){
      this.favorites.push(favorite);
      await this.saveFavIntoStorage();
      await this.saveFavCounterIntoStorage();
      return true;
    }else{
      return false;
    }

    }else{
      this.favorites.push(favorite);
      await this.saveFavIntoStorage();
      await this.saveFavCounterIntoStorage();
      return true;
    }
  }

  async saveFavIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'favs',
      value: JSON.stringify(this.favorites) //Esto es para converitr un objeto de tareas en un string tipo json
    });
    return true;
  }

  async saveFavCounterIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'favCounter', //Esto tiene que llamarse igual que en le méodo getTaskCounter()
      value: this.favoriteCounter.toString() //Tenemos que pasarlo a string.
    });
    return true;
  }
  async getFavFromStorage(): Promise<FatSecret[]> {
    const retorno = await Storage.get({ key: 'favs' });

    return JSON.parse(retorno.value) ? JSON.parse(retorno.value) : [];
  }

  /* Obtener el contador de facturas del disco*/
  async getFavCounterFromStorage(): Promise<number> {
    const tc = await Storage.get({ key: 'favCounter' });
    return Number.isInteger(+tc.value) ? + tc.value : 0;
  }

}

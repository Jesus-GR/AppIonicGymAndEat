/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Food } from '../model/food';
import { FatSecret } from '../model/fat-secret';
const API_KEY = '56ac9c2bc07d431110c96650e0f8b92d';


@Injectable({
  providedIn: 'root'
})
export class FatSecretService {

  constructor(public httpClient: HttpClient) { }

   obtenerDatos(comida: string): Observable<any>{
    return this.httpClient.get(`https://api.edamam.com/api/nutrition-data?app_id=1b8c8646&app_key=%2056ac9c2bc07d431110c96650e0f8b92d&ingr=rice`);
  }
}

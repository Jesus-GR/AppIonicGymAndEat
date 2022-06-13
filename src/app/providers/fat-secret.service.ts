/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Food } from '../model/food';
import { FatSecret } from '../model/fat-secret';
import { url } from 'inspector';
import { Options } from 'selenium-webdriver';

const API_KEY = '32bc6180e5msh460b004a458f78dp1b99a2jsn5672157a42b3';

@Injectable({
  providedIn: 'root'
})
export class FatSecretService {
  constructor(public httpClient: HttpClient) { }

   obtenerDatos(query: string): Observable<FatSecret>{
    return this.httpClient.get<FatSecret>(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${query}`,{
      headers: {
        'X-RapidAPI-Key': API_KEY,
		    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      }
    });
  }
}

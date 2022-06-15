/* eslint-disable @typescript-eslint/naming-convention */

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  constructor(public httpClient: HttpClient) { }


  obtenerDatos(query: string): Observable<Song>{
    return this.httpClient.get<Song>(`https://spotify23.p.rapidapi.com/search/`,{
      params:{
        q: query,
        type: 'tracks',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '32bc6180e5msh460b004a458f78dp1b99a2jsn5672157a42b3',
		    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    });
  }
}

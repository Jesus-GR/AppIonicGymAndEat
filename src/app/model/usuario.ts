import { SafeResourceUrl } from '@angular/platform-browser';
import { Rutina } from './rutina';

export interface Usuario {
    uid: string;
    email: string;
    password: string;
    nombre: string;
    edad: string;
    peso: number;
    altura: number;
    imc: number;
    image: string;
    pesoMaximo: number;
}

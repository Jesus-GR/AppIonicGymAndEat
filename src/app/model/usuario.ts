import { Rutina } from './rutina';

export interface Usuario {
    usuarioID?: string;
    email?: string;
    password?: string;
    nombre?: string;
    edad?: string;
    peso?: number;
    altura?: number;
    imc?: number;

    rutina?: Rutina[];
}

import { Ejercicio } from './ejercicio';

export interface Rutina {
  rutinaID?: string;
  usuarioID?: string;
  nombreRutina?: string;
  ejercicios?: Ejercicio[];
}

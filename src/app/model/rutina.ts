import { Ejercicio } from './ejercicio';

export interface Rutina {
  rutinaID?: string;
  nombreRutina?: string;
  diaSemana?: string;
  ejercicios?: Ejercicio[];
}

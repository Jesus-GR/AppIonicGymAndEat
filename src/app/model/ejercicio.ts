export interface Ejercicio {
  ejercicioID?: string;
  nombreEjercicio?: string;
  grupoMuscular?: string;
  numeroSeries?: number;
  numeroRepeticiones?: number;
  diaSemana?: string;
  pesoMaximo?: number;
  rutinaID?: string;
  registroPesos?: number[];
}

import { Pipe, PipeTransform } from '@angular/core';
import { Ejercicio } from '../model/ejercicio';
import { Rutina } from '../model/rutina';

@Pipe({
  name: 'filterByDay'
})
export class FilterByDayPipe implements PipeTransform {

  transform(ejercicios: Ejercicio[], dia: string): Ejercicio[] {
    return ejercicios.filter(r => r.diaSemana === dia);
  }

}

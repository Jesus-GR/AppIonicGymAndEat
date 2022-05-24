import { Pipe, PipeTransform } from '@angular/core';
import { Ejercicio } from '../model/ejercicio';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(palabra: string): string {
    return palabra !== 'miercoles'? palabra.charAt(0): 'x';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var spanish = {"hello":"hola", "Amandeep's Cake Shop": "pastelería"}
    value = spanish
    return value;
  }

}

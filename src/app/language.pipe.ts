import { Pipe, PipeTransform } from '@angular/core';

var spanish: any = { "Hello": "Hola", "Good Morning": "Buenos dias" }

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return spanish[value] || value
  }

}

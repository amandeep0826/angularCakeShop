import { Directive, ElementRef } from '@angular/core';

var adminusers: any = ["anandaman06@gmail.com", "jason@gmail.com", "rohit@gmail.com"]

@Directive({
  selector: '[appIsadmin]'
})
export class IsadminDirective {

  constructor(private element: ElementRef) {

    adminusers.forEach((e: any) => {
      if (e == localStorage.email) {
        console.log("ehajehjahekjh")
      }
      else {
        console.log("something different")
        console.log(localStorage.email)
      }
    });
    // this.element.nativeElement.remove()
  }

}

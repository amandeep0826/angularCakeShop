import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color: any

  constructor(private element: ElementRef) {
    console.log("Got the element", this.element.nativeElement)
    // this.element.nativeElement.style.color = "orange"
  }

  ngOnInit() {
    // this.element.nativeElement.style.color = this.color || "blue"
  }

  @HostListener('mouseenter') doThis() {
    this.element.nativeElement.classList.add("zoom1")
  }

  @HostListener('mouseleave') doThat() {
    this.element.nativeElement.classList.remove("zoom1")
  }

}

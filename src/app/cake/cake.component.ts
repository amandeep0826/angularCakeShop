import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent  {

 @Input() cakedata :any

  constructor() { }

  ngOnInit(): void {
  }

}

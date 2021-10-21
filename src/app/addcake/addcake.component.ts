import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {
  cakes:any = []
  constructor() { }
  name:any
  image:any
  price:any
  weight:any

  addCake(){
    var cake = {
      weight:this.weight,
      name:this.name,
      price:this.price,
      image:this.image
    }

    this.cakes.push(cake)
  }

  getFile(event:any){
      console.log("file is " , event.target.files[0])
      var file = event.target.files[0]
      this.image = URL.createObjectURL(file)

  }

  ngOnInit(): void {
  }

}

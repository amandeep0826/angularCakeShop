import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  demoparent(){
    alert("i got a call from my child")
  }

  stopcopying(event:any){
    event.preventDefault()
    alert("Please do not copy")
  }
  constructor() { }

  ngOnInit(): void {
  }

}

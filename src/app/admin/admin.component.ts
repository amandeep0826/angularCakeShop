import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  users : any =[
    {name:"Ashu",id:384783}, 
    {name:"Vijay" ,id:334565} ,
    {name:"Varun",id:473847834}
    ]

  ngOnInit(): void {
  }

}

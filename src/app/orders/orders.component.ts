import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router: Router, private common: CommonService, private http: HttpClient, private loader: NgxUiLoaderService) {
    if (!localStorage.token) {
      this.router.navigate(["/"])
    }
    var requestJson = {}
    var url = " https://apifromashu.herokuapp.com/api/cakeorders"
    var myheaders = new HttpHeaders()
    myheaders = myheaders.append("authtoken", localStorage.token)
    this.loader.start()
    this.http.post(url, requestJson, {
      headers: myheaders
    }).subscribe((response: any) => {
      this.orderItems = response.cakeorders
      console.log("Response from orders api", response.cakeorders)
      this.loader.stop()
    }, (error) => {
      console.log("error from orders api", error)
      this.loader.stop()
    })
  }

  orderItems: any

  ngOnInit(): void {
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cs: CommonService, private loader: NgxUiLoaderService, private http: HttpClient, private toast: ToastrService, private router: Router) {
    this.cakes = this.cs.cakeCart
    this.name = this.cs.orderAddress.name
    this.address = this.cs.orderAddress.address
    this.city = this.cs.orderAddress.city
    this.phone = this.cs.orderAddress.phone
    this.price = this.cs.totalCartPrice
    this.pincode = this.cs.orderAddress.pincode

    if (!this.cs.orderAddress) {
      this.router.navigate(["/checkout/address"])
    }
  }

  ngOnInit(): void {
  }
  cakes: any
  name: any
  address: any
  city: any
  phone: any
  price: any
  pincode: any

  submitOrder() {
    var requestJson = {
      cakes: this.cakes,
      price: this.price,
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      pincode: this.pincode
    }
    var url = " https://apifromashu.herokuapp.com/api/addcakeorder"
    var myheaders = new HttpHeaders()
    myheaders = myheaders.append("authtoken", localStorage.token)
    this.loader.start()
    this.http.post(url, requestJson, {
      headers: myheaders
    }).subscribe((response: any) => {
      console.log("Response from order cakes api", response)
      this.toast.error("Your order has been successfully placed")
      this.cs.orderSummary = response.data
      this.loader.stop()
      // alert(`${response.data.name} is added to your cart`)
    }, (error) => {
      console.log("error from order cakes api", error)
      this.loader.stop()
      this.toast.error("There is an error while placing your order. Please try again")
    })
  }

}

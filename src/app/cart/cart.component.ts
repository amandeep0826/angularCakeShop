import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalPrice: any = 0


  constructor(private common: CommonService, private http: HttpClient, private loader: NgxUiLoaderService, private router: Router) {
    // alert("Constructor")

    if (!localStorage.token) {
      this.router.navigate(["/"])
    }
    this.cartitems = this.common.cakes
    var requestJson = {}
    var url = " https://apifromashu.herokuapp.com/api/cakecart"
    var myheaders = new HttpHeaders()
    myheaders = myheaders.append("authtoken", localStorage.token)
    this.loader.start()
    this.http.post(url, requestJson, {
      headers: myheaders
    }).subscribe((response: any) => {
      console.log("Response from cakecart api", response)
      this.cartitems = response.data
      this.cartitems.forEach((each: any) => {
        this.totalPrice = this.totalPrice + (each.price * each.quantity)
      })
      this.loader.stop()
      // alert(`${response.data.name} is added to your cart`)
    }, (error) => {
      console.log("error from cakecart api", error)
      this.loader.stop()
    })

  }

  removeFromCart(index: any) {
    this.loader.start()
    var url = "https://apifromashu.herokuapp.com/api/removecakefromcart"
    var myheaders = new HttpHeaders()
    myheaders = myheaders.append("authtoken", localStorage.token)
    var requestObj = {
      cakeid: this.cartitems[index].cakeid
    }
    this.http.post(url, requestObj, { headers: myheaders }).subscribe((response: any) => {
      this.loader.stop()
      console.log("Response from remove cake from cart api")
      this.totalPrice = this.totalPrice - (this.cartitems[index].price * this.cartitems[index].quantity)
      this.cartitems.splice(index, 1)
    }, (error) => {
      this.loader.stop()
      console.log("error in remove cake from cart api", error)
    })
  }

  // ngOnChanges() {
  //   alert("On changes")
  // }

  cartitems: any
  ngOnInit(): void {
    // alert("on init")
  }

  // ngOnDestroy() {
  //   alert("Bye bye ")
  // }


}

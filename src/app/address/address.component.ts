import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private cs: CommonService, private router: Router) {
  }
  billingAddress: any = []
  name: any
  address: any
  city: any
  phone: any
  pincode: any

  submitAddress() {
    var billingAddress = {
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      pincode: this.pincode
    }
    // this.cs.orderAddress = this.billingAddress
    this.cs.orderAddress = billingAddress
    this.router.navigate(["/checkout/payment"])

    console.log("The billing address is ", billingAddress)

    // this.cakes.push(cake)
  }

  ngOnInit(): void {
  }

}

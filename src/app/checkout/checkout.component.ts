import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private common: CommonService, private router: Router) {
    if (!this.common.cakeCart) {
      this.router.navigate(["/cart"])
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {

  order: any
  constructor(private common: CommonService, private router: Router) {
    if (!this.common.orderSummary) {
      this.router.navigate(["/checkout/payment"])
    }
    this.order = this.common.orderSummary
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.common.orderSummary = null
  }

}

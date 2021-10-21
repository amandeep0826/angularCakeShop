import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  cake: any
  // cake = { "owner": { "email": "harshit199dubey@gmail.com", "name": "Harshit Dubey" }, "description": "A special Birthday cake for a party of 20 people.", "createdat": "2021-06-07T13:28:12.641Z", "likes": 10, "ratings": 4.5, "reviews": 100, "type": "Birthday", "flavour": "Chocolate", "eggless": true, "ingredients": ["Chocolate", "milk", "butter", "granulated sugar"], "_id": "60be2d3548235b00225a71c7", "name": "Chocolate Cake", "price": 500, "weight": 2, "image": "https://res.cloudinary.com/ashudev/image/upload/v1623076144/x6svihz4ldsybxj5r3t1.jpg", "cakeid": 1623076149741, "__v": 0 }
  constructor(private route: ActivatedRoute, private http: HttpClient, private loader: NgxUiLoaderService, private toast: ToastrService, private router: Router) {

    var cakeid = this.route.snapshot.params.cakeid
    var url = "https://apifromashu.herokuapp.com/api/cake/" + cakeid
    this.loader.start()
    this.http.get(url).subscribe((response: any) => {
      console.log("Response from cake details", response)
      this.cake = response.data
      this.loader.stop()
    }, (error) => {
      console.log("error in cake details api", error)
      this.loader.stop()
    })
  }

  ngOnInit(): void {
  }

  addToCart() {

    if (localStorage.token) {
      var requestJson = {
        name: this.cake.name,
        price: this.cake.price,
        weight: this.cake.weight,
        image: this.cake.image,
        cakeid: this.cake.cakeid
      }
      var url = "https://apifromashu.herokuapp.com/api/addcaketocart"
      var myheaders = new HttpHeaders()
      myheaders = myheaders.append("authtoken", localStorage.token)
      this.http.post(url, requestJson, {
        headers: myheaders
      }).subscribe((response: any) => {
        console.log("Response from addcaketocart api", response)
        if (response.data) {
          this.router.navigate(["/cart"])
        }
        this.toast.success(`${response.data.name} is successfully added to your cart`)
        // alert(`${response.data.name} is added to your cart`)
      }, (error) => {
        console.log("error from addcaketocart api", error)
        this.toast.error("There is an error while adding this item to your cart")
      })
    }
    else {
      this.toast.show("Please login first")
    }


  }

}

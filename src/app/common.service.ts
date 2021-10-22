import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {
    var url = "https://apifromashu.herokuapp.com/api/allcakes"

    this.http.get(url).subscribe((response: any) => {
      // console.log("response from allcakes", response)
      this.cakes = response.data
    }, (error) => {
      console.log("error from allcakes api", error)
    })

  }

  cakes: any
  cakeCart: any
  orderAddress: any
  totalCartPrice: any

  validEmail(e: any) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
  }
}

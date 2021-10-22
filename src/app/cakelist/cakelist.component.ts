import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  constructor(private cs: CommonService, private http: HttpClient, private loader: NgxUiLoaderService) {
    this.cakes = this.cs.cakes
    // console.log(this.cakes)
    if (this.cs.cakes) {
      this.cakes = this.cs.cakes
      // console.log("Cakes exist")
    }
    else {
      var url = "https://apifromashu.herokuapp.com/api/allcakes"
      this.loader.start()
      this.http.get(url).subscribe((response: any) => {
        // console.log("response from allcakes", response)
        this.loader.stop()
        this.cakes = response.data
      }, (error) => {
        console.log("error from allcakes api", error)
        this.loader.stop()
      })
      console.log("Cakes dont exist")
    }
  }

  cakes: any

  ngOnInit(): void {
  }

}

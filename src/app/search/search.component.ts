import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchresults: any = []
  searchtext: any

  constructor(private route: ActivatedRoute, private loader: NgxUiLoaderService, private http: HttpClient) {
    this.route.queryParams.subscribe((query) => {
      // alert("user is looking for " + query.q + "cakes")
      var searchquery = query.q
      this.searchtext = query.q
      var url = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + searchquery
      this.loader.start()
      this.http.get(url).subscribe((response: any) => {
        console.log("response from search query api", response)
        this.loader.stop()
        this.searchresults = response.data
      }, (error) => {
        console.log("error from search query api", error)
        this.loader.stop()
      })
    })
  }

  ngOnInit(): void {
  }

}

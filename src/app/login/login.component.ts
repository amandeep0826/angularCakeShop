import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginDone: any = new EventEmitter()
  constructor(private http: HttpClient, private router: Router, private loader: NgxUiLoaderService) { }

  email: any
  password: any

  ngOnInit(): void {
  }

  login() {
    this.loader.start()
    var url = "https://apifromashu.herokuapp.com/api/login"
    var requestJson = {
      email: this.email,
      password: this.password
    }
    this.http.post(url, requestJson).subscribe((response: any) => {
      // console.log("response from login api", response)
      // localStorage.email = response.email
      this.loader.stop()
      if (response.token) {
        localStorage.token = response.token
        localStorage.email = response.email
        this.router.navigate(["./"])
      }
    }, (error) => {
      console.log("Error from login api", error)
      this.loader.stop()
    })
  }

}

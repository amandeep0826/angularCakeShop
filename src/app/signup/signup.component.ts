import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: any
  name: any
  password: any
  emailError: any = ""

  constructor(private common: CommonService, private http: HttpClient, private loader: NgxUiLoaderService) { }



  signup() {
    if (this.common.validEmail(this.email)) {
      this.loader.start()
      var url = "https://apifromashu.herokuapp.com/api/register"
      this.emailError = ""
      var requestJson = {
        email: this.email,
        name: this.name,
        password: this.password
      }
      this.http.post(url, requestJson).subscribe((response) => {
        console.log("response from sign up api", response)
        this.loader.stop()
      }, (error) => {
        console.log("Error from sign up api", error)
        this.loader.stop()
      })
    }
    else {
      this.emailError = "Invalid Email"
    }

    console.log("Email is", this.email)
    console.log("Name is", this.name)
    console.log("Password is", this.password)
  }


  ngOnInit(): void {
  }

}

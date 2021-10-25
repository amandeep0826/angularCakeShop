import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from '../common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: any
  submitted: any = false

  constructor(private common: CommonService, private http: HttpClient, private loader: NgxUiLoaderService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  signup() {
    var requestJson = this.signupForm.value
    this.submitted = true
    if (this.signupForm.invalid) {
      return
    }
    else {
      this.loader.start()
      var url = "https://apifromashu.herokuapp.com/api/register"
      this.http.post(url, requestJson).subscribe((response) => {
        console.log("response from sign up api", response)
        this.loader.stop()
      }, (error) => {
        console.log("Error from sign up api", error)
        this.loader.stop()
      })
    }
  }
}

// api name - cakeorders, method = post, requestjson = {}, headers = {authToken}

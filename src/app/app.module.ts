import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DiscountPipe } from './discount.pipe';
import { LanguagePipe } from './language.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    CarouselComponent,
    CakeComponent,
    CakelistComponent,
    HomeComponent,
    LoginComponent,
    AddcakeComponent,
    AdminComponent,
    CartComponent,
    ForgotComponent,
    SearchComponent,
    PagenotfoundComponent,
    CakedetailsComponent,
    CheckoutComponent,
    DiscountPipe,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

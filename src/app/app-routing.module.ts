import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { CartComponent } from './cart/cart.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addcake', component: AddcakeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search', component: SearchComponent },
  { path: 'cake/:cakeid', component: CakedetailsComponent }, // parameterised route: cakeid is the parameter 
  {
    path: 'checkout', children: [
      { path: '', redirectTo: 'address', pathMatch: 'prefix' },
      { path: 'address', component: AddressComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'ordersummary', component: OrdersummaryComponent }
    ], component: CheckoutComponent
  },
  { path: 'forgot', component: ForgotComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

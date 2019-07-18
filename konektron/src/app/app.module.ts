import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/components/header/header.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { Page404Component } from './views/components/page404/page404.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { FaqComponent } from './views/pages/faq/faq.component';
import { TermsComponent } from './views/pages/terms/terms.component';
import { HomeComponent } from './views/pages/home/home.component';
import { SigninComponent } from './views/sign/signin/signin.component';
import { SignupComponent } from './views/sign/signup/signup.component';
import { ForgotComponent } from './views/sign/forgot/forgot.component';
import { DashboardComponent } from './views/dash/dashboard/dashboard.component';
import { AdressesComponent } from './views/dash/adresses/adresses.component';
import { CardsComponent } from './views/dash/cards/cards.component';
import { OrdersComponent } from './views/dash/orders/orders.component';
import { ProfileComponent } from './views/dash/profile/profile.component';
import { RecoveryComponent } from './views/dash/recovery/recovery.component';
import { CreditsComponent } from './views/dash/credits/credits.component';
import { CartComponent } from './views/carts/cart/cart.component';
import { CheckoutConfirmComponent } from './views/carts/checkout-confirm/checkout-confirm.component';
import { CheckoutCustomComponent } from './views/carts/checkout-custom/checkout-custom.component';
import { CategoryServComponent } from './views/pages/category-serv/category-serv.component';
import { GaleryServComponent } from './views/pages/galery-serv/galery-serv.component';
import { ServiceComponent } from './views/pages/service/service.component';
import { DashHomeComponent } from './views/dash/dash-home/dash-home.component';
import { SignTermsComponent } from './views/sign/sign-terms/sign-terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    TermsComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    DashboardComponent,
    AdressesComponent,
    CardsComponent,
    OrdersComponent,
    ProfileComponent,
    RecoveryComponent,
    CreditsComponent,
    CartComponent,
    CheckoutConfirmComponent,
    CheckoutCustomComponent,
    CategoryServComponent,
    GaleryServComponent,
    ServiceComponent,
    DashHomeComponent,
    SignTermsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

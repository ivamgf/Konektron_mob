import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { FaqComponent } from './views/pages/faq/faq.component';
import { TermsComponent } from './views/pages/terms/terms.component';
import { SigninComponent } from './views/sign/signin/signin.component';
import { SignupComponent } from './views/sign/signup/signup.component';
import { DashboardComponent } from './views/dash/dashboard/dashboard.component';
import { ProfileComponent } from './views/dash/profile/profile.component';
import { RecoveryComponent } from './views/dash/recovery/recovery.component';
import { CartComponent } from './views/carts/cart/cart.component';
import { CheckoutCustomComponent } from './views/carts/checkout-custom/checkout-custom.component';
import { CheckoutConfirmComponent } from './views/carts/checkout-confirm/checkout-confirm.component';
import { ForgotComponent } from './views/sign/forgot/forgot.component';
import { Page404Component } from './views/components/page404/page404.component';
import { OrdersComponent } from './views/dash/orders/orders.component';
import { AdressesComponent } from './views/dash/adresses/adresses.component';
import { CardsComponent } from './views/dash/cards/cards.component';
import { CreditsComponent } from './views/dash/credits/credits.component';
import { ServiceComponent } from './views/pages/service/service.component';
import { GaleryServComponent } from './views/pages/galery-serv/galery-serv.component';
import { CategoryServComponent } from './views/pages/category-serv/category-serv.component';
import { DashHomeComponent } from './views/dash/dash-home/dash-home.component';


const routes: Routes = [
  {
    path: '',
        redirectTo: 'home',
        pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
      path: 'faq',
      component: FaqComponent
  },
  {
      path: 'terms',
      component: TermsComponent
  },
  {
      path: 'signin',
      component: SigninComponent
  },
  {
      path: 'signup',
      component: SignupComponent
  },
  {
      path: 'forgot',
      component: ForgotComponent
  },
  {
      path: 'page404',
      component: Page404Component
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashHomeComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        outlet: 'dashboard-router'
      },
      {
        path: '*',
        component: Page404Component,
        outlet: 'dashboard-router'
      },
      {
        path: 'recovery',
        component: RecoveryComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'orders',
        component: OrdersComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'adresses',
        component: AdressesComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'cards',
        component: CardsComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'credits',
        component: CreditsComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'service',
        component: ServiceComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'galery-serv',
        component: GaleryServComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'category-serv',
        component: CategoryServComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'cart',
        component: CartComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'checkout-custom',
        component: CheckoutCustomComponent,
        outlet: 'dashboard-router'
      },
      {
        path: 'checkout-confirm',
        component: CheckoutConfirmComponent,
        outlet: 'dashboard-router'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './about-us/feedback/feedback.component';
import { LocationComponent } from './about-us/location/location.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthChildGuard } from './auth-child.guard';
import { AuthenticateGuard } from './authenticate.guard';
import { CanLoadAuthGuard } from './can-load-auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TvComponent } from './products/tv/tv.component';

const routes: Routes = [
  
  {
    path: '', redirectTo:'/home', pathMatch: 'full'  
  },
  {
    path: 'home', 
    component: HomeComponent
  },

  {
    path: 'aboutus',  component: AboutUsComponent, children: [
      {path: 'location', outlet: 'map', component: LocationComponent},
      {path: 'feedback', outlet: 'feedback',  component: FeedbackComponent}
    ]
  },
  {
    path: 'contactus',
    canActivate: [AuthenticateGuard],
    component: ContactUsComponent
  },
  
  {
    path: 'products',  component: ProductsComponent, 
    canActivateChild: [AuthChildGuard],
    children: [
      // {path: '', },
      {path: 'tv', component: TvComponent},
      {path: 'laptop', component: LaptopComponent},
      {path: 'mobile', component: MobileComponent},
    ]
  },
  {
    path: 'denied',
    component: AccessDeniedComponent
  },
  
  { path: 'users', 
  canLoad: [CanLoadAuthGuard],
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
  },

  { path: 'forms', 
    component: FormsComponent
  },
  
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myComponents = [
  HomeComponent,
  AboutUsComponent,
  ContactUsComponent,
  PageNotFoundComponent,
  ProductsComponent,
  TvComponent,
  LaptopComponent,
  MobileComponent,
  LocationComponent,
  FeedbackComponent,
  FormsComponent
]

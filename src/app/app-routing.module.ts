import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './about-us/feedback/feedback.component';
import { LocationComponent } from './about-us/location/location.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TvComponent } from './products/tv/tv.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

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
    component: ContactUsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'products',  component: ProductsComponent, children: [
      // {path: '', },
      {path: 'tv', component: TvComponent},
      {path: 'laptop', component: LaptopComponent},
      {path: 'mobile', component: MobileComponent}
    ]
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
  UsersComponent,
  UserDetailsComponent,
  ProductsComponent,
  TvComponent,
  LaptopComponent,
  MobileComponent,
  LocationComponent,
  FeedbackComponent

]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
    path: 'aboutus',
    component: AboutUsComponent,
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
    path: 'userDetails/:id',
    component: UserDetailsComponent
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
  UserDetailsComponent
]

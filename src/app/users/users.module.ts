import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/custom-pipes/filter.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    HttpClientModule
  ]
})
export  class UsersModule { }

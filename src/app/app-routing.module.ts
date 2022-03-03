import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PropertyBindingExComponent } from './data-binding/property-binding-ex/property-binding-ex.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  // {
  //   path: '/propertyBinding',
  //   component: PropertyBindingExComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

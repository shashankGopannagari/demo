import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingExComponent } from './data-binding/property-binding-ex/property-binding-ex.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataBindingComponent,
    PropertyBindingExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

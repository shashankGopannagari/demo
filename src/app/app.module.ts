import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingExComponent } from './data-binding/property-binding-ex/property-binding-ex.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { HighlightDirective } from './directives/highlight.directive';
import { IfComponent } from './directives/if/if.component';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ExamplePipe } from './pipes/example.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataBindingComponent,
    PropertyBindingExComponent,
    EventBindingComponent,
    HighlightDirective,
    IfComponent,
    NgForComponent,
    PipesComponent,
    ExamplePipe,
    // FilterPipe,
    myComponents,
    AccessDeniedComponent,
    FormsComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi:true },
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

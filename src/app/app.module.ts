import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { FilterPipe } from './pipes/custom-pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


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
    FilterPipe,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

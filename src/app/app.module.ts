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
    ExamplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

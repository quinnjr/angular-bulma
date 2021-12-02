import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  BulmaNavbarModule,
  BulmaMenuModule,
  BulmaDropdownModule
} from '../../../components/src/public-api';

import { HomeComponent } from './home/home.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { ComponentsRoutingModule } from './components/components-routing.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    // Angular-Bulma modules
    BulmaNavbarModule,
    BulmaMenuModule,
    BulmaDropdownModule
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

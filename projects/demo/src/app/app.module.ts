import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  BulmaNavbarModule,
  BulmaMenuModule,
  BulmaBreadcrumbsModule,
  BulmaCarouselModule
} from '../../../components/src/public-api';

import { HomeComponent } from './home/home.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Angular-Bulma modules
    BulmaNavbarModule,
    BulmaBreadcrumbsModule,
    BulmaMenuModule,
    BulmaCarouselModule
  ],
  declarations: [
    CodeSnippetComponent,
    AppComponent,
    HomeComponent,
    BreadcrumbsComponent,
    NavbarComponent,
    MenuComponent,
    CarouselComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

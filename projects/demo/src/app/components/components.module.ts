import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BulmaCarouselModule,
  BulmaMenuModule,
  BulmaNavbarModule,
  BulmaDropdownModule,
  BulmaBreadcrumbsModule,
  BulmaAlertModule,
  BulmaMessageModule
} from '../../../../components/src/public-api';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    BulmaAlertModule,
    BulmaBreadcrumbsModule,
    BulmaCarouselModule,
    BulmaDropdownModule,
    BulmaMenuModule,
    BulmaNavbarModule,
    BulmaMessageModule
  ],
  declarations: [
    BreadcrumbsComponent,
    CarouselComponent,
    MenuComponent,
    NavbarComponent,
    DropdownComponent,
    CodeSnippetComponent
  ],
  exports: [ComponentsRoutingModule]
})
export class ComponentsModule {}

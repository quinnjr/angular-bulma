import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BreadcrumbsComponent,
    CarouselComponent,
    MenuComponent,
    NavbarComponent
  ],
  exports: [
    BreadcrumbsComponent,
    CarouselComponent,
    MenuComponent,
    NavbarComponent
  ]
})
export class ComponentsModule {}

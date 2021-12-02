import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'dropdown', component: DropdownComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}

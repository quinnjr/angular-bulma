import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

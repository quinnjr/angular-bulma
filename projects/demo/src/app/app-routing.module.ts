import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'components',
    loadChildren: () =>
      import('./components/components-routing.module').then(
        (m) => m.ComponentsRoutingModule
      )
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./directives/directives-routing.module').then(
        (m) => m.DirectivesRoutingModule
      )
  },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

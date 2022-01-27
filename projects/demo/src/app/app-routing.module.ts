import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InstallationComponent } from './installation/installation.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const routes: Routes = [
  {
    path: 'installation',
    component: InstallationComponent
  },
  {
    path: 'configuration',
    component: ConfigurationComponent
  },
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
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements-routing.module').then(
        (m) => m.ElementsRoutingModule
      )
  },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

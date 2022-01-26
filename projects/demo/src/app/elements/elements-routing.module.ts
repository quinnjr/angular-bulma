import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageComponent } from './image/image.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'image', component: ImageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {}

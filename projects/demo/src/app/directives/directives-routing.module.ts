import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorComponent } from './color/color.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { OtherComponent } from './other/other.component';
import { OverviewComponent } from './overview/overview.component';
import { SpacingComponent } from './spacing/spacing.component';
import { TypographyComponent } from './typography/typography.component';
import { VisibilityComponent } from './visibility/visibility.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'colors', component: ColorComponent },
  { path: 'flexbox', component: FlexboxComponent },
  { path: 'other', component: OtherComponent },
  { path: 'spacing', component: SpacingComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'visibility', component: VisibilityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color/color.component';

import { BulmaDirectivesModule } from '../../../../directives/src/public-api';
import { DirectivesRoutingModule } from './directives-routing.module';

import { FlexboxComponent } from './flexbox/flexbox.component';
import { OtherComponent } from './other/other.component';
import { SpacingComponent } from './spacing/spacing.component';
import { TypographyComponent } from './typography/typography.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { OverviewComponent } from './overview/overview.component';
import { CodeSnippetModule } from '../code-snippet/code-snippet.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    BulmaDirectivesModule,
    CodeSnippetModule
  ],
  declarations: [
    ColorComponent,
    FlexboxComponent,
    OtherComponent,
    SpacingComponent,
    TypographyComponent,
    VisibilityComponent,
    OverviewComponent
  ],
  exports: [DirectivesRoutingModule]
})
export class DirectivesModule {}

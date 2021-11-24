import { NgModule } from '@angular/core';

import { ColorModule } from './color/color.module';
import { FlexboxModule } from './flexbox/flexbox.module';
import { OtherModule } from './other/other.module';
import { SpacingModule } from './spacing/spacing.module';
import { TypographyModule } from './typography/typography.module';
import { VisabilityModule } from './visability/visability.module';

@NgModule({
  imports: [
    ColorModule,
    FlexboxModule,
    OtherModule,
    SpacingModule,
    TypographyModule,
    VisabilityModule
  ],
  declarations: [],
  exports: [
    ColorModule,
    FlexboxModule,
    OtherModule,
    SpacingModule,
    TypographyModule,
    VisabilityModule
  ]
})
export class DirectivesModule {}

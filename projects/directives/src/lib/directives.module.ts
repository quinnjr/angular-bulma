import { NgModule } from '@angular/core';

import { BulmaColorDirectivesModule } from './color/color.module';
import { BulmaFlexboxDirectivesModule } from './flexbox/flexbox.module';
import { BulmaOtherDirectivesModule } from './other/other.module';
import { BulmaSpacingDirectivesModule } from './spacing/spacing.module';
import { BulmaTypographyDirectivesModule } from './typography/typography.module';
import { BulmaVisibilityDirectivesModule } from './visibility/visibility.module';

@NgModule({
  imports: [
    BulmaColorDirectivesModule,
    BulmaFlexboxDirectivesModule,
    BulmaOtherDirectivesModule,
    BulmaSpacingDirectivesModule,
    BulmaTypographyDirectivesModule,
    BulmaVisibilityDirectivesModule
  ],
  declarations: [],
  exports: [
    BulmaColorDirectivesModule,
    BulmaFlexboxDirectivesModule,
    BulmaOtherDirectivesModule,
    BulmaSpacingDirectivesModule,
    BulmaTypographyDirectivesModule,
    BulmaVisibilityDirectivesModule
  ]
})
export class BulmaDirectivesModule {}

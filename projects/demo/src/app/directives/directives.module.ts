import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color/color.component';

import { BulmaDirectivesModule } from '../../../../directives/src/public-api';
import { DirectivesRoutingModule } from './directives-routing.module';

@NgModule({
  imports: [CommonModule, DirectivesRoutingModule, BulmaDirectivesModule],
  declarations: [ColorComponent],
  exports: [DirectivesRoutingModule]
})
export class DirectivesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from './image/image.component';
import { ElementsRoutingModule } from './elements-routing.module';

import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [CommonModule, ElementsRoutingModule],
  declarations: [ImageComponent, OverviewComponent]
})
export class ElementsModule {}

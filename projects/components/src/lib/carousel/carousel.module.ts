import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulmaCarouselComponent, BulmaCarouselItemComponent } from './carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BulmaCarouselComponent,
    BulmaCarouselItemComponent
  ]
})
export class BulmaCarouselModule {}

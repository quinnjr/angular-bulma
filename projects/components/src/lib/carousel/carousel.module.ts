import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BulmaCarouselSlideDirective,
  BulmaCarouselComponent
} from './carousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BulmaCarouselComponent, BulmaCarouselSlideDirective],
  exports: [BulmaCarouselComponent, BulmaCarouselSlideDirective]
})
export class BulmaCarouselModule {}

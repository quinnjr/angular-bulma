import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulmaNavbarComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BulmaNavbarComponent],
  exports: [BulmaNavbarComponent]
})
export class BulmaNavbarModule {}

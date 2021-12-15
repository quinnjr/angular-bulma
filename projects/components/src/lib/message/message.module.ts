import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulmaMessageComponent } from './message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BulmaMessageComponent],
  exports: [BulmaMessageComponent]
})
export class BulmaMessageModule {}

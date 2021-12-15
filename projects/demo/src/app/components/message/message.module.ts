import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';

import { BulmaMessageModule } from '../../../../../components/src/public-api';

@NgModule({
  imports: [CommonModule, BulmaMessageModule],
  declarations: [MessageComponent]
})
export class MessageModule {}

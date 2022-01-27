import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaModalComponent } from './modal.component';
import { BulmaCardModalComponent } from './card-modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BulmaModalComponent, BulmaCardModalComponent],
  exports: [BulmaModalComponent, BulmaCardModalComponent]
})
export class BulmaModalModule {}

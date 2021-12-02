import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulmaMenuComponent } from './menu.component';
import { BulmaMenuListComponent } from './menu-list.component';
import { BulmaMenuLabelComponent } from './menu-label.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BulmaMenuComponent,
    BulmaMenuListComponent,
    BulmaMenuLabelComponent
  ],
  exports: [BulmaMenuComponent, BulmaMenuListComponent, BulmaMenuLabelComponent]
})
export class BulmaMenuModule {}

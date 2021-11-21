import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulmaMenuComponent } from './menu.component';
import { BulmaMenuLabelComponent } from './menu-label.component';
import { BulmaMenuListComponent, BulmaMenuListItemComponent } from './menu-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BulmaMenuComponent,
    BulmaMenuLabelComponent,
    BulmaMenuListComponent,
    BulmaMenuListItemComponent
  ],
  exports: [
    BulmaMenuComponent,
    BulmaMenuLabelComponent,
    BulmaMenuListComponent,
    BulmaMenuListItemComponent
  ]
})
export class BulmaMenuModule { }

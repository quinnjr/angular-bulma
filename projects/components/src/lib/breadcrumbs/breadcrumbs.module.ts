import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulmaBreadcrumbsComponent } from './breadcrumbs.component';
import { BulmaBreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BulmaBreadcrumbsComponent,
    BulmaBreadcrumbComponent
  ]
})
export class BulmaBreadcrumbsModule { }

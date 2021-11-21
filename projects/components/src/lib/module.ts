import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BulmaBreadcrumbsComponent, BulmaBreadcrumbComponent, BulmaBreadcrumbsModule } from "./breadcrumbs";
import { BulmaCarouselModule } from "./carousel";
import { BulmaMenuModule } from "./menu";
import { BulmaNavbarModule } from "./navbar";

@NgModule({
  imports: [
    CommonModule,
    BulmaBreadcrumbsModule,
    BulmaCarouselModule,
    BulmaMenuModule,
    BulmaNavbarModule
  ],
  exports: [
    BulmaBreadcrumbsModule,
    BulmaCarouselModule,
    BulmaMenuModule,
    BulmaNavbarModule
  ]
})
export class BulmaComponentsModule {}

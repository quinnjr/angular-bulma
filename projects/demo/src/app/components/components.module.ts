import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BulmaCarouselModule,
  BulmaMenuModule,
  BulmaNavbarModule,
  BulmaDropdownModule,
  BulmaBreadcrumbsModule,
  BulmaAlertModule,
  BulmaMessageModule,
  BulmaComponentsModule
} from '../../../../components/src/public-api';

import { ComponentsRoutingModule } from './components-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { HeroComponent } from './hero/hero.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { IconComponent } from './icon/icon.component';
import { LevelComponent } from './level/level.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelComponent } from './panel/panel.component';
import { TabsComponent } from './tabs/tabs.component';
import { CodeSnippetModule } from '../code-snippet/code-snippet.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    BulmaComponentsModule,
    CodeSnippetModule
  ],
  declarations: [
    BreadcrumbsComponent,
    CardComponent,
    CarouselComponent,
    DropdownComponent,
    FooterComponent,
    HeroComponent,
    IconComponent,
    LevelComponent,
    MediaObjectComponent,
    MenuComponent,
    MessageComponent,
    ModalComponent,
    NavbarComponent,
    OverviewComponent,
    PaginationComponent,
    PanelComponent,
    TabsComponent
  ],
  exports: [ComponentsRoutingModule]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { IconComponent } from './icon/icon.component';
import { LevelComponent } from './level/level.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelComponent } from './panel/panel.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: 'breadcrumb',
    component: BreadcrumbsComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'dropdown',
    component: DropdownComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'icon',
    component: IconComponent
  },
  {
    path: 'level',
    component: LevelComponent
  },
  {
    path: 'media-object',
    component: MediaObjectComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'panel',
    component: PanelComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}

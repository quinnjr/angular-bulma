import { NgModule } from '@angular/core';
import { BulmaAlertModule } from './alert';

import { BulmaBreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { BulmaCardModule } from './card/card.module';
import { BulmaCarouselModule } from './carousel/carousel.module';
import { BulmaDropdownModule } from './dropdown/dropdown.module';
import { BulmaFooterModule } from './footer/footer.module';
import { BulmaLevelModule } from './level/level.module';
import { BulmaMediaObjectModule } from './media-object/media-object.module';
import { BulmaMenuModule } from './menu/menu.module';
import { BulmaMessageModule } from './message/message.module';
import { BulmaModalModule } from './modal/modal.module';
import { BulmaNavbarModule } from './navbar/navbar.module';
import { BulmaPaginationModule } from './pagination/pagination.module';
import { BulmaPanelModule } from './panel/panel.module';
import { BulmaTabsModule } from './tabs/tabs.module';

@NgModule({
  imports: [
    BulmaAlertModule,
    BulmaBreadcrumbsModule,
    BulmaCardModule,
    BulmaCarouselModule,
    BulmaDropdownModule,
    BulmaFooterModule,
    BulmaLevelModule,
    BulmaMediaObjectModule,
    BulmaMenuModule,
    BulmaMessageModule,
    BulmaModalModule,
    BulmaNavbarModule,
    BulmaPaginationModule,
    BulmaPanelModule,
    BulmaTabsModule
  ],
  exports: [
    BulmaAlertModule,
    BulmaBreadcrumbsModule,
    BulmaCardModule,
    BulmaDropdownModule,
    BulmaFooterModule,
    BulmaLevelModule,
    BulmaMediaObjectModule,
    BulmaMenuModule,
    BulmaMessageModule,
    BulmaModalModule,
    BulmaNavbarModule,
    BulmaPaginationModule,
    BulmaPanelModule,
    BulmaTabsModule
  ]
})
export class BulmaComponentsModule {}

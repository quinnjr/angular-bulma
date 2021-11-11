import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BreadcrumbModule } from '../../../breadcrumb/src/public-api';
import { ButtonModule } from '../../..//button/src/public-api';
import { CardModule } from 'projects/card/src/public-api';
import { DirectivesModule } from 'projects/directives/src/public-api';
import { DropdownModule } from 'projects/dropdown/src/public-api';
import { FooterModule } from 'projects/footer/src/public-api';
import { HeroModule } from 'projects/hero/src/public-api';
import { IconModule } from 'projects/icon/src/public-api';
import { LevelModule } from 'projects/level/src/public-api';
import { MediaObjectModule } from 'projects/media-object/src/public-api';
import { MenuModule } from 'projects/menu/src/public-api';
import { MessageModule } from 'projects/message/src/public-api';
import { ModalModule } from 'projects/modal/src/public-api';
import { NavbarModule } from 'projects/navbar/src/public-api';
import { PaginationModule } from 'projects/pagination/src/public-api';
import { PanelModule } from 'projects/panel/src/public-api';
import { TabsModule } from 'projects/tabs/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Angular-Bulma modules
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    DirectivesModule,
    DropdownModule,
    FooterModule,
    HeroModule,
    IconModule,
    LevelModule,
    MediaObjectModule,
    MenuModule,
    MessageModule,
    ModalModule,
    NavbarModule,
    PaginationModule,
    PanelModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

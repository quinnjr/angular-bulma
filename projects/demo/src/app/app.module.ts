import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BreadcrumbModule } from '../../../breadcrumb/src/public-api';
import { ButtonModule } from '../../../button/src/public-api';
import { CardModule } from '../../../card/src/public-api';
import { DirectivesModule } from '../../../directives/src/public-api';
import { DropdownModule } from '../../../dropdown/src/public-api';
import { FooterModule } from '../../../footer/src/public-api';
import { HeroModule } from '../../../hero/src/public-api';
import { IconModule } from '../../../icon/src/public-api';
import { LevelModule } from '../../../level/src/public-api';
import { MediaObjectModule } from '../../../media-object/src/public-api';
import { MenuModule } from '../../../menu/src/public-api';
import { MessageModule } from '../../../message/src/public-api';
import { ModalModule } from '../../../modal/src/public-api';
import { NavbarModule } from '../../../navbar/src/public-api';
import { PaginationModule } from '../../../pagination/src/public-api';
import { PanelModule } from '../../../panel/src/public-api';
import { TabsModule } from '../../../tabs/src/public-api';

import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HomeComponent
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

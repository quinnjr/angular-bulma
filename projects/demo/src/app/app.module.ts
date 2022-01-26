import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BulmaComponentsModule } from '../../../components/src/public-api';
import { BulmaDirectivesModule } from '../../../directives/src/public-api';

import { HomeComponent } from './home/home.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { InstallationComponent } from './installation/installation.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ElementsModule } from './elements/elements.module';
import { FloatableDirective } from './floatable.directive';
import { ThemesService } from './themes.service';
import { NavigationService } from './navigation.service';
import { CodeSnippetModule } from './code-snippet/code-snippet.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    DirectivesModule,
    ElementsModule,
    CodeSnippetModule,
    // Angular-Bulma modules
    BulmaComponentsModule,
    BulmaDirectivesModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    InstallationComponent,
    ConfigurationComponent,
    FloatableDirective
  ],
  providers: [ThemesService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {}

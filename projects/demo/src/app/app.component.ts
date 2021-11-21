import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public routes = [
    'breadcrumbs',
    'button',
    'card',
    'carousel',
    'dropdown',
    'footer',
    'hero',
    'icon',
    'level',
    'media-object',
    'menu',
    'message',
    'modal',
    'navbar',
    'pagination',
    'panel',
    'tabs'
  ];

  public capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

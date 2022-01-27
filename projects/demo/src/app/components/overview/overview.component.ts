import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  public components = [
    'breadcrumb',
    'card',
    'dropdown',
    'menu',
    'message',
    'modal',
    'navbar',
    'pagination',
    'panel',
    'tabs'
  ];

  public layouts = ['level', 'media-object', 'hero', 'footer'];

  constructor() {}
}

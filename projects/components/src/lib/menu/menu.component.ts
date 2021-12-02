import { Component, Input } from '@angular/core';

@Component({
  selector: 'bu-menu',
  template: `
    <aside class="menu">
      <ng-content></ng-content>
    </aside>
  `
})
export class BulmaMenuComponent {
  constructor() {}

  @Input('is-active') public isActiveFunc: () => boolean = () => false;
}

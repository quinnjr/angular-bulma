import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { BulmaBreadcrumbComponent } from './breadcrumb.component';

@Component({
  selector: 'bu-breadcrumbs',
  template: `
    <nav
      class="breadcrumb"
      [ngClass]="{
        'is-centered': alignment === 'centered',
        'is-right': alignment === 'right',
        'has-arrow-separator': separator === 'arrow',
        'has-bullet-separator': separator === 'bullet',
        'has-dot-separator': separator === 'dot',
        'has-succeeds-separator': separator === 'succeeds',
        'is-small': size === 'small',
        'is-medium': size === 'medium',
        'is-large': size === 'large'
      }"
      [attr.aria-label]="ariaLabel"
    >
      <ul>
        <li
          *ngFor="let breadcrumb of breadcrumbs; let idx = index"
          [ngClass]="{ 'is-active': idx === breadcrumbs.length - 1 }"
        >
          <ng-container
            *ngTemplateOutlet="breadcrumb.templateRef"
          ></ng-container>
        </li>
      </ul>
    </nav>
  `
})
export class BulmaBreadcrumbsComponent {
  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  @Input('label') ariaLabel = '';
  @Input() alignment = '';
  @Input() separator = '';
  @Input() size = '';

  @ContentChildren(BulmaBreadcrumbComponent)
  breadcrumbs!: QueryList<BulmaBreadcrumbComponent>;

  constructor() {}
}

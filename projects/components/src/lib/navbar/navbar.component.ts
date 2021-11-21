import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'bu-navbar',
  template: `
    <nav class="navbar"
      role="navigation"
      [attr.aria-label]="ariaLabel"
      [attr.aria-expanded]="isActive"
      [ngClass]="{
        'is-transparent': isTransparent,
        'is-fixed-top': isFixed === 'top',
        'is-fixed-bottom': isFixed === 'bottom',
        'is-spaced': isSpaced,
        'has-shadow': hasShadow,
        'is-primary': color == 'primary',
        'is-link': color == 'link',
        'is-info': color == 'info',
        'is-success': color == 'success',
        'is-warning': color == 'warning',
        'is-danger': color == 'danger',
        'is-black': color == 'black',
        'is-dark': color == 'dark',
        'is-light': color == 'light',
        'is-white': color == 'white'
      }"
    >
      <div class="navbar-brand">
        <ng-content select=".navbar-brand"></ng-content>
        <a *ngIf="hasBurger"
          (click)="isActive = !isActive"
          [ngClass]="{ 'is-active': isActive }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          [attr.aria-expanded]="isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu"
        [ngClass]="{ 'is-active': isActive }"
      >
        <ng-content selector=".navbar-start"></ng-content>
        <ng-content selector=".navbar-end"></ng-content>
      </div>
    </nav>
  `
})
export class BulmaNavbarComponent {
  @Input('label') ariaLabel = '';
  @Input('has-burger') hasBurger = true;
  @Input('transparent') isTransparent = false;
  @Input('fixed') isFixed = '';
  @Input('spaced') isSpaced = false;
  @Input('shadow') hasShadow = false;
  @Input('color') color = 'white';

  public isActive = false;

  constructor() {}
}

/* eslint-disable @angular-eslint/no-input-rename */

import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'bu-navbar',
  template: `
    <nav
      class="navbar"
      role="navigation"
      [attr.aria-label]="ariaLabel"
      [attr.aria-expanded]="isActive"
      [ngClass]="{
        'is-transparent': isTransparent,
        'is-fixed-top': isFixed === 'top',
        'is-fixed-bottom': isFixed === 'bottom',
        'is-spaced': isSpaced,
        'has-shadow': hasShadow,
        'is-primary': color === 'primary',
        'is-link': color === 'link',
        'is-info': color === 'info',
        'is-success': color === 'success',
        'is-warning': color === 'warning',
        'is-danger': color === 'danger',
        'is-black': color === 'black',
        'is-dark': color === 'dark',
        'is-light': color === 'light',
        'is-white': color === 'white'
      }"
    >
      <div class="navbar-brand">
        <ng-content select=".navbar-brand"></ng-content>
        <a
          *ngIf="hasBurger"
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
      <div class="navbar-menu" [ngClass]="{ 'is-active': isActive }">
        <ng-content selector=".navbar-start"></ng-content>
        <ng-content selector=".navbar-end"></ng-content>
      </div>
    </nav>
  `
})
export class BulmaNavbarComponent implements AfterContentInit, AfterViewInit {
  @Input('label') public ariaLabel = '';
  @Input('fixed') public isFixed = '';
  @Input() public color = 'white';

  public isActive = false;

  private _hasBurger = true;
  private _isTransparent = false;
  private _isFixed = '';
  private _isSpaced = false;
  private _hasShadow = false;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  public get hasBurger(): boolean {
    return this._hasBurger;
  }

  @Input('has-burger')
  public set hasBurger(input: string | boolean) {
    if (typeof input === 'string') {
      if (input.toLowerCase() === 'true') {
        this.hasBurger = true;
      } else {
        this.hasBurger = false;
      }
    } else {
      this.hasBurger = input;
    }
  }

  public get isTransparent(): boolean {
    return this._isTransparent;
  }

  @Input('transparent')
  public set isTransparent(input: string | boolean) {
    if (typeof input === 'string') {
      if (input.toLowerCase() === 'true') {
        this._isTransparent = true;
      } else {
        this._isTransparent = false;
      }
    } else {
      this._isTransparent = input;
    }
  }

  public get isSpaced(): boolean {
    return this._isSpaced;
  }

  @Input('spaced')
  public set isSpaced(input: string | boolean) {
    if (typeof input === 'string') {
      if (input.toLowerCase() === 'true') {
        this._isSpaced = true;
      } else {
        this._isSpaced = false;
      }
    } else {
      this._isSpaced = input;
    }
  }

  public get hasShadow(): boolean {
    return this._hasShadow;
  }

  @Input('shadow')
  public set hasShadow(input: string | boolean) {
    if (typeof input === 'string') {
      if (input.toLowerCase() === 'true') {
        this._hasShadow = true;
      } else {
        this._hasShadow = false;
      }
    } else {
      this._hasShadow = input;
    }
  }

  public ngAfterContentInit() {
    this.cdr.detectChanges();
  }

  public ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}

/* eslint-disable no-underscore-dangle, @typescript-eslint/member-ordering */

import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'bu-image',
  template: `
    <figure class="image" [ngClass]="{ 'is-fullwidth': fullwidth }">
      <ng-content></ng-content>
    </figure>
  `
})
export class ImageComponent implements AfterViewInit, AfterContentInit {
  @Input() public fullwidth = false;

  @ContentChild('[has-ratio]') element?: ElementRef<any>;

  private _dimensions = '';
  private _ratio = '';

  constructor(public elementRef: ElementRef) {}

  public get dimensions(): string {
    return `is-${this._dimensions}`;
  }

  @Input()
  public set dimensions(val: string) {
    this._dimensions = val;
  }

  public get ratio(): string {
    return `is-${this._ratio}`;
  }

  @Input()
  public set ratio(val: string) {
    this._ratio = val;
  }

  public ngAfterViewInit() {
    const classList = this.elementRef.nativeElement.classList;

    if (this._ratio.length > 0) {
      classList.add(this.ratio);
    }

    if (this._dimensions.length > 0) {
      classList.add(this.dimensions);
    }
  }

  public ngAfterContentInit() {
    if (this.element) {
      this.element.nativeElement.classList.add('has-ratio');
    }
  }
}

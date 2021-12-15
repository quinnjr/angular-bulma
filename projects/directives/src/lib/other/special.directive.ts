import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-is-active]'
})
export class BulmaIsActiveDirective implements OnChanges, OnInit {
  @Input('bu-is-active') public set buIsActive(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsActive(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsActive) {
      this.elementRef.nativeElement.classList.add('is-active');
    } else {
      this.elementRef.nativeElement.classList.remove('is-active');
    }
  }

  public ngOnChanges() {
    if (this.buIsActive) {
      this.elementRef.nativeElement.classList.add('is-active');
    } else {
      this.elementRef.nativeElement.classList.remove('is-active');
    }
  }
}

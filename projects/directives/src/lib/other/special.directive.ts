import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-active]'
})
export class BulmaIsActiveDirective implements OnChanges, OnInit {
  @Input('bu-is-active') public set buIsActive(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
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

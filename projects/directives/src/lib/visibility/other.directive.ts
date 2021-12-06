import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-invisible]'
})
export class BulmaIsInvisibleDirective implements OnChanges, OnInit {
  @Input('bu-is-invisible') public set buIsInvisible(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsInvisible(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInvisible) {
      this.elementRef.nativeElement.classList.add('is-invisible');
    } else {
      this.elementRef.nativeElement.classList.remove('is-invisible');
    }
  }

  public ngOnChanges() {
    if (this.buIsInvisible) {
      this.elementRef.nativeElement.classList.add('is-invisible');
    } else {
      this.elementRef.nativeElement.classList.remove('is-invisible');
    }
  }
}

@Directive({
  selector: '[bu-is-hidden]'
})
export class BulmaIsHiddenDirective implements OnChanges, OnInit {
  @Input('bu-is-hidden') public set buIsHidden(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsHidden(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsHidden) {
      this.elementRef.nativeElement.classList.add('is-hidden');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden');
    }
  }

  public ngOnChanges() {
    if (this.buIsHidden) {
      this.elementRef.nativeElement.classList.add('is-hidden');
    } else {
      this.elementRef.nativeElement.classList.remove('is-hidden');
    }
  }
}

@Directive({
  selector: '[bu-is-sr-only]'
})
export class BulmaIsSrOnlyDirective implements OnChanges, OnInit {
  @Input('bu-is-sr-only') public set buIsSrOnly(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsSrOnly(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSrOnly) {
      this.elementRef.nativeElement.classList.add('is-sr-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-sr-only');
    }
  }

  public ngOnChanges() {
    if (this.buIsSrOnly) {
      this.elementRef.nativeElement.classList.add('is-sr-only');
    } else {
      this.elementRef.nativeElement.classList.remove('is-sr-only');
    }
  }
}

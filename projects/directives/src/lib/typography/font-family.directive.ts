import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-family-sans-serif]'
})
export class BulmaIsFamilySansSerifDirective implements OnChanges, OnInit {
  @Input('bu-is-family-sans-serif') public set buIsFamilySansSerif(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFamilySansSerif(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFamilySansSerif) {
      this.elementRef.nativeElement.classList.add('is-family-sans-serif');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-sans-serif');
    }
  }

  public ngOnChanges() {
    if (this.buIsFamilySansSerif) {
      this.elementRef.nativeElement.classList.add('is-family-sans-serif');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-sans-serif');
    }
  }
}

@Directive({
  selector: '[bu-is-family-monospace]'
})
export class BulmaIsFamilyMonospaceDirective implements OnChanges, OnInit {
  @Input('bu-is-family-monospace') public set buIsFamilyMonospace(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFamilyMonospace(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFamilyMonospace) {
      this.elementRef.nativeElement.classList.add('is-family-monospace');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-monospace');
    }
  }

  public ngOnChanges() {
    if (this.buIsFamilyMonospace) {
      this.elementRef.nativeElement.classList.add('is-family-monospace');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-monospace');
    }
  }
}

@Directive({
  selector: '[bu-is-family-primary]'
})
export class BulmaIsFamilyPrimaryDirective implements OnChanges, OnInit {
  @Input('bu-is-family-primary') public set buIsFamilyPrimary(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFamilyPrimary(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFamilyPrimary) {
      this.elementRef.nativeElement.classList.add('is-family-primary');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-primary');
    }
  }

  public ngOnChanges() {
    if (this.buIsFamilyPrimary) {
      this.elementRef.nativeElement.classList.add('is-family-primary');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-primary');
    }
  }
}

@Directive({
  selector: '[bu-is-family-secondary]'
})
export class BulmaIsFamilySecondaryDirective implements OnChanges, OnInit {
  @Input('bu-is-family-secondary') public set buIsFamilySecondary(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFamilySecondary(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFamilySecondary) {
      this.elementRef.nativeElement.classList.add('is-family-secondary');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-secondary');
    }
  }

  public ngOnChanges() {
    if (this.buIsFamilySecondary) {
      this.elementRef.nativeElement.classList.add('is-family-secondary');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-secondary');
    }
  }
}

@Directive({
  selector: '[bu-is-family-code]'
})
export class BulmaIsFamilyCodeDirective implements OnChanges, OnInit {
  @Input('bu-is-family-code') public set buIsFamilyCode(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buIsFamilyCode(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsFamilyCode) {
      this.elementRef.nativeElement.classList.add('is-family-code');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-code');
    }
  }

  public ngOnChanges() {
    if (this.buIsFamilyCode) {
      this.elementRef.nativeElement.classList.add('is-family-code');
    } else {
      this.elementRef.nativeElement.classList.remove('is-family-code');
    }
  }
}

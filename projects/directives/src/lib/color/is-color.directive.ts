import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-is-primary]'
})
export class BulmaIsPrimaryDirective implements OnChanges, OnInit {
  @Input('bu-is-primary') public set buIsPrimary(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsPrimary(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsPrimary) {
      this.elementRef.nativeElement.classList.add('is-primary');
    } else {
      this.elementRef.nativeElement.classList.remove('is-primary');
    }
  }

  public ngOnChanges() {
    if (this.buIsPrimary) {
      this.elementRef.nativeElement.classList.add('is-primary');
    } else {
      this.elementRef.nativeElement.classList.remove('is-primary');
    }
  }
}

@Directive({
  selector: '[bu-is-info]'
})
export class BulmaIsInfoDirective implements OnChanges, OnInit {
  @Input('bu-is-info') public set buIsInfo(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsInfo(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsInfo) {
      this.elementRef.nativeElement.classList.add('is-info');
    } else {
      this.elementRef.nativeElement.classList.remove('is-info');
    }
  }

  public ngOnChanges() {
    if (this.buIsInfo) {
      this.elementRef.nativeElement.classList.add('is-info');
    } else {
      this.elementRef.nativeElement.classList.remove('is-info');
    }
  }
}

@Directive({
  selector: '[bu-is-link]'
})
export class BulmaIsLinkDirective implements OnChanges, OnInit {
  @Input('bu-is-link') public set buIsLink(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsLink(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsLink) {
      this.elementRef.nativeElement.classList.add('is-link');
    } else {
      this.elementRef.nativeElement.classList.remove('is-link');
    }
  }

  public ngOnChanges() {
    if (this.buIsLink) {
      this.elementRef.nativeElement.classList.add('is-link');
    } else {
      this.elementRef.nativeElement.classList.remove('is-link');
    }
  }
}

@Directive({
  selector: '[bu-is-success]'
})
export class BulmaIsSuccessDirective implements OnChanges, OnInit {
  @Input('bu-is-success') public set buIsSuccess(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsSuccess(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsSuccess) {
      this.elementRef.nativeElement.classList.add('is-success');
    } else {
      this.elementRef.nativeElement.classList.remove('is-success');
    }
  }

  public ngOnChanges() {
    if (this.buIsSuccess) {
      this.elementRef.nativeElement.classList.add('is-success');
    } else {
      this.elementRef.nativeElement.classList.remove('is-success');
    }
  }
}

@Directive({
  selector: '[bu-is-warning]'
})
export class BulmaIsWarningDirective implements OnChanges, OnInit {
  @Input('bu-is-warning') public set buIsWarning(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsWarning(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsWarning) {
      this.elementRef.nativeElement.classList.add('is-warning');
    } else {
      this.elementRef.nativeElement.classList.remove('is-warning');
    }
  }

  public ngOnChanges() {
    if (this.buIsWarning) {
      this.elementRef.nativeElement.classList.add('is-warning');
    } else {
      this.elementRef.nativeElement.classList.remove('is-warning');
    }
  }
}

@Directive({
  selector: '[bu-is-danger]'
})
export class BulmaIsDangerDirective implements OnChanges, OnInit {
  @Input('bu-is-danger') public set buIsDanger(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsDanger(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsDanger) {
      this.elementRef.nativeElement.classList.add('is-danger');
    } else {
      this.elementRef.nativeElement.classList.remove('is-danger');
    }
  }

  public ngOnChanges() {
    if (this.buIsDanger) {
      this.elementRef.nativeElement.classList.add('is-danger');
    } else {
      this.elementRef.nativeElement.classList.remove('is-danger');
    }
  }
}

@Directive({
  selector: '[bu-is-black]'
})
export class BulmaIsBlackDirective implements OnChanges, OnInit {
  @Input('bu-is-black') public set buIsBlack(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsBlack(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsBlack) {
      this.elementRef.nativeElement.classList.add('is-black');
    } else {
      this.elementRef.nativeElement.classList.remove('is-black');
    }
  }

  public ngOnChanges() {
    if (this.buIsBlack) {
      this.elementRef.nativeElement.classList.add('is-black');
    } else {
      this.elementRef.nativeElement.classList.remove('is-black');
    }
  }
}

@Directive({
  selector: '[bu-is-dark]'
})
export class BulmaIsDarkDirective implements OnChanges, OnInit {
  @Input('bu-is-dark') public set buIsDark(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsDark) {
      this.elementRef.nativeElement.classList.add('is-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('is-dark');
    }
  }

  public ngOnChanges() {
    if (this.buIsDark) {
      this.elementRef.nativeElement.classList.add('is-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('is-dark');
    }
  }
}

@Directive({
  selector: '[bu-is-light]'
})
export class BulmaIsLightDirective implements OnChanges, OnInit {
  @Input('bu-is-light') public set buIsLight(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsLight) {
      this.elementRef.nativeElement.classList.add('is-light');
    } else {
      this.elementRef.nativeElement.classList.remove('is-light');
    }
  }

  public ngOnChanges() {
    if (this.buIsLight) {
      this.elementRef.nativeElement.classList.add('is-light');
    } else {
      this.elementRef.nativeElement.classList.remove('is-light');
    }
  }
}

@Directive({
  selector: '[bu-is-white]'
})
export class BulmaIsWhiteDirective implements OnChanges, OnInit {
  @Input('bu-is-white') public set buIsWhite(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsWhite(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsWhite) {
      this.elementRef.nativeElement.classList.add('is-white');
    } else {
      this.elementRef.nativeElement.classList.remove('is-white');
    }
  }

  public ngOnChanges() {
    if (this.buIsWhite) {
      this.elementRef.nativeElement.classList.add('is-white');
    } else {
      this.elementRef.nativeElement.classList.remove('is-white');
    }
  }
}

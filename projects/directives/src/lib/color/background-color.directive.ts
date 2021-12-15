import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-has-background-white]'
})
export class BulmaHasBackgroundWhiteDirective implements OnChanges, OnInit {
  @Input('bu-has-background-white') public set buHasBackgroundWhite(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundWhite(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundWhite) {
      this.elementRef.nativeElement.classList.add('has-background-white');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-white');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundWhite) {
      this.elementRef.nativeElement.classList.add('has-background-white');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-white');
    }
  }
}

@Directive({
  selector: '[bu-has-background-black]'
})
export class BulmaHasBackgroundBlackDirective implements OnChanges, OnInit {
  @Input('bu-has-background-black') public set buHasBackgroundBlack(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundBlack(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundBlack) {
      this.elementRef.nativeElement.classList.add('has-background-black');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-black');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundBlack) {
      this.elementRef.nativeElement.classList.add('has-background-black');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-black');
    }
  }
}

@Directive({
  selector: '[bu-has-background-light]'
})
export class BulmaHasBackgroundLightDirective implements OnChanges, OnInit {
  @Input('bu-has-background-light') public set buHasBackgroundLight(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundLight) {
      this.elementRef.nativeElement.classList.add('has-background-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundLight) {
      this.elementRef.nativeElement.classList.add('has-background-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-light');
    }
  }
}

@Directive({
  selector: '[bu-has-background-dark]'
})
export class BulmaHasBackgroundDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-background-dark') public set buHasBackgroundDark(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundDark) {
      this.elementRef.nativeElement.classList.add('has-background-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-dark');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundDark) {
      this.elementRef.nativeElement.classList.add('has-background-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-dark');
    }
  }
}

@Directive({
  selector: '[bu-has-background-primary]'
})
export class BulmaHasBackgroundPrimaryDirective implements OnChanges, OnInit {
  @Input('bu-has-background-primary') public set buHasBackgroundPrimary(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundPrimary(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundPrimary) {
      this.elementRef.nativeElement.classList.add('has-background-primary');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-primary');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundPrimary) {
      this.elementRef.nativeElement.classList.add('has-background-primary');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-primary');
    }
  }
}

@Directive({
  selector: '[bu-has-background-link]'
})
export class BulmaHasBackgroundLinkDirective implements OnChanges, OnInit {
  @Input('bu-has-background-link') public set buHasBackgroundLink(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundLink(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundLink) {
      this.elementRef.nativeElement.classList.add('has-background-link');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-link');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundLink) {
      this.elementRef.nativeElement.classList.add('has-background-link');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-link');
    }
  }
}

@Directive({
  selector: '[bu-has-background-info]'
})
export class BulmaHasBackgroundInfoDirective implements OnChanges, OnInit {
  @Input('bu-has-background-info') public set buHasBackgroundInfo(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundInfo(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundInfo) {
      this.elementRef.nativeElement.classList.add('has-background-info');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-info');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundInfo) {
      this.elementRef.nativeElement.classList.add('has-background-info');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-info');
    }
  }
}

@Directive({
  selector: '[bu-has-background-success]'
})
export class BulmaHasBackgroundSuccessDirective implements OnChanges, OnInit {
  @Input('bu-has-background-success') public set buHasBackgroundSuccess(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundSuccess(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundSuccess) {
      this.elementRef.nativeElement.classList.add('has-background-success');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-success');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundSuccess) {
      this.elementRef.nativeElement.classList.add('has-background-success');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-success');
    }
  }
}

@Directive({
  selector: '[bu-has-background-warning]'
})
export class BulmaHasBackgroundWarningDirective implements OnChanges, OnInit {
  @Input('bu-has-background-warning') public set buHasBackgroundWarning(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundWarning(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundWarning) {
      this.elementRef.nativeElement.classList.add('has-background-warning');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-warning');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundWarning) {
      this.elementRef.nativeElement.classList.add('has-background-warning');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-warning');
    }
  }
}

@Directive({
  selector: '[bu-has-background-danger]'
})
export class BulmaHasBackgroundDangerDirective implements OnChanges, OnInit {
  @Input('bu-has-background-danger') public set buHasBackgroundDanger(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundDanger(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundDanger) {
      this.elementRef.nativeElement.classList.add('has-background-danger');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-danger');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundDanger) {
      this.elementRef.nativeElement.classList.add('has-background-danger');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-danger');
    }
  }
}

@Directive({
  selector: '[bu-has-background-black-bis]'
})
export class BulmaHasBackgroundBlackBisDirective implements OnChanges, OnInit {
  @Input('bu-has-background-black-bis') public set buHasBackgroundBlackBis(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundBlackBis(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundBlackBis) {
      this.elementRef.nativeElement.classList.add('has-background-black-bis');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-black-bis'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundBlackBis) {
      this.elementRef.nativeElement.classList.add('has-background-black-bis');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-black-bis'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-black-ter]'
})
export class BulmaHasBackgroundBlackTerDirective implements OnChanges, OnInit {
  @Input('bu-has-background-black-ter') public set buHasBackgroundBlackTer(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundBlackTer(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundBlackTer) {
      this.elementRef.nativeElement.classList.add('has-background-black-ter');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-black-ter'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundBlackTer) {
      this.elementRef.nativeElement.classList.add('has-background-black-ter');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-black-ter'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-grey-darker]'
})
export class BulmaHasBackgroundGreyDarkerDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-grey-darker') public set buHasBackgroundGreyDarker(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundGreyDarker(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundGreyDarker) {
      this.elementRef.nativeElement.classList.add('has-background-grey-darker');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-grey-darker'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundGreyDarker) {
      this.elementRef.nativeElement.classList.add('has-background-grey-darker');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-grey-darker'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-grey-dark]'
})
export class BulmaHasBackgroundGreyDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-background-grey-dark') public set buHasBackgroundGreyDark(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundGreyDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundGreyDark) {
      this.elementRef.nativeElement.classList.add('has-background-grey-dark');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-grey-dark'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundGreyDark) {
      this.elementRef.nativeElement.classList.add('has-background-grey-dark');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-grey-dark'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-grey]'
})
export class BulmaHasBackgroundGreyDirective implements OnChanges, OnInit {
  @Input('bu-has-background-grey') public set buHasBackgroundGrey(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundGrey(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundGrey) {
      this.elementRef.nativeElement.classList.add('has-background-grey');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-grey');
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundGrey) {
      this.elementRef.nativeElement.classList.add('has-background-grey');
    } else {
      this.elementRef.nativeElement.classList.remove('has-background-grey');
    }
  }
}

@Directive({
  selector: '[bu-has-background-grey-light]'
})
export class BulmaHasBackgroundGreyLightDirective implements OnChanges, OnInit {
  @Input('bu-has-background-grey-light') public set buHasBackgroundGreyLight(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundGreyLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundGreyLight) {
      this.elementRef.nativeElement.classList.add('has-background-grey-light');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-grey-light'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundGreyLight) {
      this.elementRef.nativeElement.classList.add('has-background-grey-light');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-grey-light'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-grey-lighter]'
})
export class BulmaHasBackgroundGreyLighterDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-grey-lighter')
  public set buHasBackgroundGreyLighter(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundGreyLighter(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundGreyLighter) {
      this.elementRef.nativeElement.classList.add(
        'has-background-grey-lighter'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-grey-lighter'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundGreyLighter) {
      this.elementRef.nativeElement.classList.add(
        'has-background-grey-lighter'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-grey-lighter'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-white-ter]'
})
export class BulmaHasBackgroundWhiteTerDirective implements OnChanges, OnInit {
  @Input('bu-has-background-white-ter') public set buHasBackgroundWhiteTer(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundWhiteTer(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundWhiteTer) {
      this.elementRef.nativeElement.classList.add('has-background-white-ter');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-white-ter'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundWhiteTer) {
      this.elementRef.nativeElement.classList.add('has-background-white-ter');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-white-ter'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-white-bis]'
})
export class BulmaHasBackgroundWhiteBisDirective implements OnChanges, OnInit {
  @Input('bu-has-background-white-bis') public set buHasBackgroundWhiteBis(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundWhiteBis(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundWhiteBis) {
      this.elementRef.nativeElement.classList.add('has-background-white-bis');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-white-bis'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundWhiteBis) {
      this.elementRef.nativeElement.classList.add('has-background-white-bis');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-white-bis'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-primary-light]'
})
export class BulmaHasBackgroundPrimaryLightDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-primary-light')
  public set buHasBackgroundPrimaryLight(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundPrimaryLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundPrimaryLight) {
      this.elementRef.nativeElement.classList.add(
        'has-background-primary-light'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-primary-light'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundPrimaryLight) {
      this.elementRef.nativeElement.classList.add(
        'has-background-primary-light'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-primary-light'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-link-light]'
})
export class BulmaHasBackgroundLinkLightDirective implements OnChanges, OnInit {
  @Input('bu-has-background-link-light') public set buHasBackgroundLinkLight(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundLinkLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundLinkLight) {
      this.elementRef.nativeElement.classList.add('has-background-link-light');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-link-light'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundLinkLight) {
      this.elementRef.nativeElement.classList.add('has-background-link-light');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-link-light'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-info-light]'
})
export class BulmaHasBackgroundInfoLightDirective implements OnChanges, OnInit {
  @Input('bu-has-background-info-light') public set buHasBackgroundInfoLight(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundInfoLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundInfoLight) {
      this.elementRef.nativeElement.classList.add('has-background-info-light');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-info-light'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundInfoLight) {
      this.elementRef.nativeElement.classList.add('has-background-info-light');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-info-light'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-success-light]'
})
export class BulmaHasBackgroundSuccessLightDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-success-light')
  public set buHasBackgroundSuccessLight(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundSuccessLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundSuccessLight) {
      this.elementRef.nativeElement.classList.add(
        'has-background-success-light'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-success-light'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundSuccessLight) {
      this.elementRef.nativeElement.classList.add(
        'has-background-success-light'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-success-light'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-warning-light]'
})
export class BulmaHasBackgroundWarningLightDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-warning-light')
  public set buHasBackgroundWarningLight(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundWarningLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundWarningLight) {
      this.elementRef.nativeElement.classList.add(
        'has-background-warning-light'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-warning-light'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundWarningLight) {
      this.elementRef.nativeElement.classList.add(
        'has-background-warning-light'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-warning-light'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-danger-light]'
})
export class BulmaHasBackgroundDangerLightDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-danger-light')
  public set buHasBackgroundDangerLight(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundDangerLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundDangerLight) {
      this.elementRef.nativeElement.classList.add(
        'has-background-danger-light'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-danger-light'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundDangerLight) {
      this.elementRef.nativeElement.classList.add(
        'has-background-danger-light'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-danger-light'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-primary-dark]'
})
export class BulmaHasBackgroundPrimaryDarkDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-primary-dark')
  public set buHasBackgroundPrimaryDark(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundPrimaryDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundPrimaryDark) {
      this.elementRef.nativeElement.classList.add(
        'has-background-primary-dark'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-primary-dark'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundPrimaryDark) {
      this.elementRef.nativeElement.classList.add(
        'has-background-primary-dark'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-primary-dark'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-link-dark]'
})
export class BulmaHasBackgroundLinkDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-background-link-dark') public set buHasBackgroundLinkDark(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundLinkDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundLinkDark) {
      this.elementRef.nativeElement.classList.add('has-background-link-dark');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-link-dark'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundLinkDark) {
      this.elementRef.nativeElement.classList.add('has-background-link-dark');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-link-dark'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-info-dark]'
})
export class BulmaHasBackgroundInfoDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-background-info-dark') public set buHasBackgroundInfoDark(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundInfoDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundInfoDark) {
      this.elementRef.nativeElement.classList.add('has-background-info-dark');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-info-dark'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundInfoDark) {
      this.elementRef.nativeElement.classList.add('has-background-info-dark');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-info-dark'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-success-dark]'
})
export class BulmaHasBackgroundSuccessDarkDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-success-dark')
  public set buHasBackgroundSuccessDark(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundSuccessDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundSuccessDark) {
      this.elementRef.nativeElement.classList.add(
        'has-background-success-dark'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-success-dark'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundSuccessDark) {
      this.elementRef.nativeElement.classList.add(
        'has-background-success-dark'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-success-dark'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-warning-dark]'
})
export class BulmaHasBackgroundWarningDarkDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-warning-dark')
  public set buHasBackgroundWarningDark(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundWarningDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundWarningDark) {
      this.elementRef.nativeElement.classList.add(
        'has-background-warning-dark'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-warning-dark'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundWarningDark) {
      this.elementRef.nativeElement.classList.add(
        'has-background-warning-dark'
      );
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-warning-dark'
      );
    }
  }
}

@Directive({
  selector: '[bu-has-background-danger-dark]'
})
export class BulmaHasBackgroundDangerDarkDirective
  implements OnChanges, OnInit
{
  @Input('bu-has-background-danger-dark') public set buHasBackgroundDangerDark(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasBackgroundDangerDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasBackgroundDangerDark) {
      this.elementRef.nativeElement.classList.add('has-background-danger-dark');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-danger-dark'
      );
    }
  }

  public ngOnChanges() {
    if (this.buHasBackgroundDangerDark) {
      this.elementRef.nativeElement.classList.add('has-background-danger-dark');
    } else {
      this.elementRef.nativeElement.classList.remove(
        'has-background-danger-dark'
      );
    }
  }
}

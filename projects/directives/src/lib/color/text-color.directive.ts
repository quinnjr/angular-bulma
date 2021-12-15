import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-has-text-white]'
})
export class BulmaHasTextWhiteDirective implements OnChanges, OnInit {
  @Input('bu-has-text-white') public set buHasTextWhite(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextWhite(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWhite) {
      this.elementRef.nativeElement.classList.add('has-text-white');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-white');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWhite) {
      this.elementRef.nativeElement.classList.add('has-text-white');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-white');
    }
  }
}

@Directive({
  selector: '[bu-has-text-black]'
})
export class BulmaHasTextBlackDirective implements OnChanges, OnInit {
  @Input('bu-has-text-black') public set buHasTextBlack(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextBlack(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextBlack) {
      this.elementRef.nativeElement.classList.add('has-text-black');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-black');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextBlack) {
      this.elementRef.nativeElement.classList.add('has-text-black');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-black');
    }
  }
}

@Directive({
  selector: '[bu-has-text-light]'
})
export class BulmaHasTextLightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-light') public set buHasTextLight(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLight) {
      this.elementRef.nativeElement.classList.add('has-text-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLight) {
      this.elementRef.nativeElement.classList.add('has-text-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-light');
    }
  }
}

@Directive({
  selector: '[bu-has-text-dark]'
})
export class BulmaHasTextDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-text-dark') public set buHasTextDark(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextDark) {
      this.elementRef.nativeElement.classList.add('has-text-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-dark');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextDark) {
      this.elementRef.nativeElement.classList.add('has-text-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-dark');
    }
  }
}

@Directive({
  selector: '[bu-has-text-primary]'
})
export class BulmaHasTextPrimaryDirective implements OnChanges, OnInit {
  @Input('bu-has-text-primary') public set buHasTextPrimary(
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

  public get buHasTextPrimary(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextPrimary) {
      this.elementRef.nativeElement.classList.add('has-text-primary');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-primary');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextPrimary) {
      this.elementRef.nativeElement.classList.add('has-text-primary');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-primary');
    }
  }
}

@Directive({
  selector: '[bu-has-text-link]'
})
export class BulmaHasTextLinkDirective implements OnChanges, OnInit {
  @Input('bu-has-text-link') public set buHasTextLink(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLink(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLink) {
      this.elementRef.nativeElement.classList.add('has-text-link');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-link');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLink) {
      this.elementRef.nativeElement.classList.add('has-text-link');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-link');
    }
  }
}

@Directive({
  selector: '[bu-has-text-info]'
})
export class BulmaHasTextInfoDirective implements OnChanges, OnInit {
  @Input('bu-has-text-info') public set buHasTextInfo(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextInfo(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextInfo) {
      this.elementRef.nativeElement.classList.add('has-text-info');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-info');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextInfo) {
      this.elementRef.nativeElement.classList.add('has-text-info');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-info');
    }
  }
}

@Directive({
  selector: '[bu-has-text-success]'
})
export class BulmaHasTextSuccessDirective implements OnChanges, OnInit {
  @Input('bu-has-text-success') public set buHasTextSuccess(
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

  public get buHasTextSuccess(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextSuccess) {
      this.elementRef.nativeElement.classList.add('has-text-success');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-success');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextSuccess) {
      this.elementRef.nativeElement.classList.add('has-text-success');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-success');
    }
  }
}

@Directive({
  selector: '[bu-has-text-warning]'
})
export class BulmaHasTextWarningDirective implements OnChanges, OnInit {
  @Input('bu-has-text-warning') public set buHasTextWarning(
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

  public get buHasTextWarning(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWarning) {
      this.elementRef.nativeElement.classList.add('has-text-warning');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-warning');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWarning) {
      this.elementRef.nativeElement.classList.add('has-text-warning');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-warning');
    }
  }
}

@Directive({
  selector: '[bu-has-text-danger]'
})
export class BulmaHasTextDangerDirective implements OnChanges, OnInit {
  @Input('bu-has-text-danger') public set buHasTextDanger(
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

  public get buHasTextDanger(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextDanger) {
      this.elementRef.nativeElement.classList.add('has-text-danger');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-danger');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextDanger) {
      this.elementRef.nativeElement.classList.add('has-text-danger');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-danger');
    }
  }
}

@Directive({
  selector: '[bu-has-text-black-bis]'
})
export class BulmaHasTextBlackBisDirective implements OnChanges, OnInit {
  @Input('bu-has-text-black-bis') public set buHasTextBlackBis(
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

  public get buHasTextBlackBis(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextBlackBis) {
      this.elementRef.nativeElement.classList.add('has-text-black-bis');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-black-bis');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextBlackBis) {
      this.elementRef.nativeElement.classList.add('has-text-black-bis');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-black-bis');
    }
  }
}

@Directive({
  selector: '[bu-has-text-black-ter]'
})
export class BulmaHasTextBlackTerDirective implements OnChanges, OnInit {
  @Input('bu-has-text-black-ter') public set buHasTextBlackTer(
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

  public get buHasTextBlackTer(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextBlackTer) {
      this.elementRef.nativeElement.classList.add('has-text-black-ter');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-black-ter');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextBlackTer) {
      this.elementRef.nativeElement.classList.add('has-text-black-ter');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-black-ter');
    }
  }
}

@Directive({
  selector: '[bu-has-text-grey-darker]'
})
export class BulmaHasTextGreyDarkerDirective implements OnChanges, OnInit {
  @Input('bu-has-text-grey-darker') public set buHasTextGreyDarker(
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

  public get buHasTextGreyDarker(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextGreyDarker) {
      this.elementRef.nativeElement.classList.add('has-text-grey-darker');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey-darker');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextGreyDarker) {
      this.elementRef.nativeElement.classList.add('has-text-grey-darker');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey-darker');
    }
  }
}

@Directive({
  selector: '[bu-has-text-grey-dark]'
})
export class BulmaHasTextGreyDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-text-grey-dark') public set buHasTextGreyDark(
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

  public get buHasTextGreyDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextGreyDark) {
      this.elementRef.nativeElement.classList.add('has-text-grey-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey-dark');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextGreyDark) {
      this.elementRef.nativeElement.classList.add('has-text-grey-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey-dark');
    }
  }
}

@Directive({
  selector: '[bu-has-text-grey]'
})
export class BulmaHasTextGreyDirective implements OnChanges, OnInit {
  @Input('bu-has-text-grey') public set buHasTextGrey(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextGrey(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextGrey) {
      this.elementRef.nativeElement.classList.add('has-text-grey');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextGrey) {
      this.elementRef.nativeElement.classList.add('has-text-grey');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey');
    }
  }
}

@Directive({
  selector: '[bu-has-text-grey-light]'
})
export class BulmaHasTextGreyLightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-grey-light') public set buHasTextGreyLight(
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

  public get buHasTextGreyLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextGreyLight) {
      this.elementRef.nativeElement.classList.add('has-text-grey-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextGreyLight) {
      this.elementRef.nativeElement.classList.add('has-text-grey-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey-light');
    }
  }
}

@Directive({
  selector: '[bu-has-text-grey-lighter]'
})
export class BulmaHasTextGreyLighterDirective implements OnChanges, OnInit {
  @Input('bu-has-text-grey-lighter') public set buHasTextGreyLighter(
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

  public get buHasTextGreyLighter(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextGreyLighter) {
      this.elementRef.nativeElement.classList.add('has-text-grey-lighter');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey-lighter');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextGreyLighter) {
      this.elementRef.nativeElement.classList.add('has-text-grey-lighter');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-grey-lighter');
    }
  }
}

@Directive({
  selector: '[bu-has-text-white-ter]'
})
export class BulmaHasTextWhiteTerDirective implements OnChanges, OnInit {
  @Input('bu-has-text-white-ter') public set buHasTextWhiteTer(
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

  public get buHasTextWhiteTer(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWhiteTer) {
      this.elementRef.nativeElement.classList.add('has-text-white-ter');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-white-ter');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWhiteTer) {
      this.elementRef.nativeElement.classList.add('has-text-white-ter');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-white-ter');
    }
  }
}

@Directive({
  selector: '[bu-has-text-white-bis]'
})
export class BulmaHasTextWhiteBisDirective implements OnChanges, OnInit {
  @Input('bu-has-text-white-bis') public set buHasTextWhiteBis(
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

  public get buHasTextWhiteBis(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWhiteBis) {
      this.elementRef.nativeElement.classList.add('has-text-white-bis');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-white-bis');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWhiteBis) {
      this.elementRef.nativeElement.classList.add('has-text-white-bis');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-white-bis');
    }
  }
}

@Directive({
  selector: '[bu-has-text-primary-light]'
})
export class BulmaHasTextPrimaryLightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-primary-light') public set buHasTextPrimaryLight(
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

  public get buHasTextPrimaryLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextPrimaryLight) {
      this.elementRef.nativeElement.classList.add('has-text-primary-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-primary-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextPrimaryLight) {
      this.elementRef.nativeElement.classList.add('has-text-primary-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-primary-light');
    }
  }
}

@Directive({
  selector: '[bu-has-text-link-light]'
})
export class BulmaHasTextLinkLightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-link-light') public set buHasTextLinkLight(
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

  public get buHasTextLinkLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLinkLight) {
      this.elementRef.nativeElement.classList.add('has-text-link-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-link-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLinkLight) {
      this.elementRef.nativeElement.classList.add('has-text-link-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-link-light');
    }
  }
}

@Directive({
  selector: '[bu-has-text-info-light]'
})
export class BulmaHasTextInfoLightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-info-light') public set buHasTextInfoLight(
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

  public get buHasTextInfoLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextInfoLight) {
      this.elementRef.nativeElement.classList.add('has-text-info-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-info-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextInfoLight) {
      this.elementRef.nativeElement.classList.add('has-text-info-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-info-light');
    }
  }
}

@Directive({
  selector: '[bu-has-text-success-light]'
})
export class BulmaHasTextSuccessLightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-success-light') public set buHasTextSuccessLight(
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

  public get buHasTextSuccessLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextSuccessLight) {
      this.elementRef.nativeElement.classList.add('has-text-success-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-success-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextSuccessLight) {
      this.elementRef.nativeElement.classList.add('has-text-success-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-success-light');
    }
  }
}

@Directive({
  selector: '[bu-has-text-warning-light]'
})
export class BulmaHasTextWarningLightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-warning-light') public set buHasTextWarningLight(
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

  public get buHasTextWarningLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWarningLight) {
      this.elementRef.nativeElement.classList.add('has-text-warning-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-warning-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWarningLight) {
      this.elementRef.nativeElement.classList.add('has-text-warning-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-warning-light');
    }
  }
}

@Directive({
  selector: '[bu-has-text-danger-light]'
})
export class BulmaHasTextDangerLightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-danger-light') public set buHasTextDangerLight(
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

  public get buHasTextDangerLight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextDangerLight) {
      this.elementRef.nativeElement.classList.add('has-text-danger-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-danger-light');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextDangerLight) {
      this.elementRef.nativeElement.classList.add('has-text-danger-light');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-danger-light');
    }
  }
}

@Directive({
  selector: '[bu-has-text-primary-dark]'
})
export class BulmaHasTextPrimaryDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-text-primary-dark') public set buHasTextPrimaryDark(
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

  public get buHasTextPrimaryDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextPrimaryDark) {
      this.elementRef.nativeElement.classList.add('has-text-primary-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-primary-dark');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextPrimaryDark) {
      this.elementRef.nativeElement.classList.add('has-text-primary-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-primary-dark');
    }
  }
}

@Directive({
  selector: '[bu-has-text-link-dark]'
})
export class BulmaHasTextLinkDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-text-link-dark') public set buHasTextLinkDark(
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

  public get buHasTextLinkDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLinkDark) {
      this.elementRef.nativeElement.classList.add('has-text-link-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-link-dark');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLinkDark) {
      this.elementRef.nativeElement.classList.add('has-text-link-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-link-dark');
    }
  }
}

@Directive({
  selector: '[bu-has-text-info-dark]'
})
export class BulmaHasTextInfoDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-text-info-dark') public set buHasTextInfoDark(
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

  public get buHasTextInfoDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextInfoDark) {
      this.elementRef.nativeElement.classList.add('has-text-info-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-info-dark');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextInfoDark) {
      this.elementRef.nativeElement.classList.add('has-text-info-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-info-dark');
    }
  }
}

@Directive({
  selector: '[bu-has-text-success-dark]'
})
export class BulmaHasTextSuccessDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-text-success-dark') public set buHasTextSuccessDark(
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

  public get buHasTextSuccessDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextSuccessDark) {
      this.elementRef.nativeElement.classList.add('has-text-success-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-success-dark');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextSuccessDark) {
      this.elementRef.nativeElement.classList.add('has-text-success-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-success-dark');
    }
  }
}

@Directive({
  selector: '[bu-has-text-warning-dark]'
})
export class BulmaHasTextWarningDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-text-warning-dark') public set buHasTextWarningDark(
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

  public get buHasTextWarningDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextWarningDark) {
      this.elementRef.nativeElement.classList.add('has-text-warning-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-warning-dark');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextWarningDark) {
      this.elementRef.nativeElement.classList.add('has-text-warning-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-warning-dark');
    }
  }
}

@Directive({
  selector: '[bu-has-text-danger-dark]'
})
export class BulmaHasTextDangerDarkDirective implements OnChanges, OnInit {
  @Input('bu-has-text-danger-dark') public set buHasTextDangerDark(
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

  public get buHasTextDangerDark(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextDangerDark) {
      this.elementRef.nativeElement.classList.add('has-text-danger-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-danger-dark');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextDangerDark) {
      this.elementRef.nativeElement.classList.add('has-text-danger-dark');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-danger-dark');
    }
  }
}

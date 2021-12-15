import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import isBoolean from 'lodash.isboolean';

@Directive({
  selector: '[bu-is-capitalized]'
})
export class BulmaIsCapitalizedDirective implements OnChanges, OnInit {
  @Input('bu-is-capitalized') public set buIsCapitalized(
    val: string | boolean
  ) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsCapitalized(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsCapitalized) {
      this.elementRef.nativeElement.classList.add('is-capitalized');
    } else {
      this.elementRef.nativeElement.classList.remove('is-capitalized');
    }
  }

  public ngOnChanges() {
    if (this.buIsCapitalized) {
      this.elementRef.nativeElement.classList.add('is-capitalized');
    } else {
      this.elementRef.nativeElement.classList.remove('is-capitalized');
    }
  }
}

@Directive({
  selector: '[bu-is-lowercase]'
})
export class BulmaIsLowercaseDirective implements OnChanges, OnInit {
  @Input('bu-is-lowercase') public set buIsLowercase(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsLowercase(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsLowercase) {
      this.elementRef.nativeElement.classList.add('is-lowercase');
    } else {
      this.elementRef.nativeElement.classList.remove('is-lowercase');
    }
  }

  public ngOnChanges() {
    if (this.buIsLowercase) {
      this.elementRef.nativeElement.classList.add('is-lowercase');
    } else {
      this.elementRef.nativeElement.classList.remove('is-lowercase');
    }
  }
}

@Directive({
  selector: '[bu-is-uppercase]'
})
export class BulmaIsUppercaseDirective implements OnChanges, OnInit {
  @Input('bu-is-uppercase') public set buIsUppercase(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsUppercase(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsUppercase) {
      this.elementRef.nativeElement.classList.add('is-uppercase');
    } else {
      this.elementRef.nativeElement.classList.remove('is-uppercase');
    }
  }

  public ngOnChanges() {
    if (this.buIsUppercase) {
      this.elementRef.nativeElement.classList.add('is-uppercase');
    } else {
      this.elementRef.nativeElement.classList.remove('is-uppercase');
    }
  }
}

@Directive({
  selector: '[bu-is-italic]'
})
export class BulmaIsItalicDirective implements OnChanges, OnInit {
  @Input('bu-is-italic') public set buIsItalic(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsItalic(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsItalic) {
      this.elementRef.nativeElement.classList.add('is-italic');
    } else {
      this.elementRef.nativeElement.classList.remove('is-italic');
    }
  }

  public ngOnChanges() {
    if (this.buIsItalic) {
      this.elementRef.nativeElement.classList.add('is-italic');
    } else {
      this.elementRef.nativeElement.classList.remove('is-italic');
    }
  }
}

@Directive({
  selector: '[bu-is-underlined]'
})
export class BulmaIsUnderlinedDirective implements OnChanges, OnInit {
  @Input('bu-is-underlined') public set buIsUnderlined(val: string | boolean) {
    if (typeof val === 'string') {
      if (isBoolean(val)) {
        val = !!val;
      } else {
        val = true;
      }
    }

    this._enabled = val;
  }

  public get buIsUnderlined(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buIsUnderlined) {
      this.elementRef.nativeElement.classList.add('is-underlined');
    } else {
      this.elementRef.nativeElement.classList.remove('is-underlined');
    }
  }

  public ngOnChanges() {
    if (this.buIsUnderlined) {
      this.elementRef.nativeElement.classList.add('is-underlined');
    } else {
      this.elementRef.nativeElement.classList.remove('is-underlined');
    }
  }
}

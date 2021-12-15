import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-has-text-centered]'
})
export class BulmaHasTextCenteredDirective implements OnChanges, OnInit {
  @Input('bu-has-text-centered') public set buHasTextCentered(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextCentered(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextCentered) {
      this.elementRef.nativeElement.classList.add('has-text-centered');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-centered');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextCentered) {
      this.elementRef.nativeElement.classList.add('has-text-centered');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-centered');
    }
  }
}

@Directive({
  selector: '[bu-has-text-justified]'
})
export class BulmaHasTextJustifiedDirective implements OnChanges, OnInit {
  @Input('bu-has-text-justified') public set buHasTextJustified(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextJustified(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextJustified) {
      this.elementRef.nativeElement.classList.add('has-text-justified');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-justified');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextJustified) {
      this.elementRef.nativeElement.classList.add('has-text-justified');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-justified');
    }
  }
}

@Directive({
  selector: '[bu-has-text-left]'
})
export class BulmaHasTextLeftDirective implements OnChanges, OnInit {
  @Input('bu-has-text-left') public set buHasTextLeft(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextLeft(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextLeft) {
      this.elementRef.nativeElement.classList.add('has-text-left');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextLeft) {
      this.elementRef.nativeElement.classList.add('has-text-left');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-left');
    }
  }
}

@Directive({
  selector: '[bu-has-text-right]'
})
export class BulmaHasTextRightDirective implements OnChanges, OnInit {
  @Input('bu-has-text-right') public set buHasTextRight(val: string | boolean) {
    if (typeof val === 'string') {
      if (val.length === 0) {
        val = true;
      } else {
        val = !!val;
      }
    }

    this._enabled = val;
  }

  public get buHasTextRight(): boolean {
    return this._enabled;
  }

  private _enabled = true;

  constructor(private readonly elementRef: ElementRef) {}

  public ngOnInit() {
    if (this.buHasTextRight) {
      this.elementRef.nativeElement.classList.add('has-text-right');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right');
    }
  }

  public ngOnChanges() {
    if (this.buHasTextRight) {
      this.elementRef.nativeElement.classList.add('has-text-right');
    } else {
      this.elementRef.nativeElement.classList.remove('has-text-right');
    }
  }
}

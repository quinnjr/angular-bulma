import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'bu-dropdown',
  template: `
    <div
      class="dropdown"
      [ngClass]="{
        'is-active': isActive,
        'is-hoverable': isHoverable,
        'is-right': isRight,
        'is-up': isUp
      }"
    >
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          (click)="toggleIsActive()"
        >
          <span>{{ title }}</span>
          <span class="icon is-small">
            <i [class]="chevronClass" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})
export class BulmaDropdownComponent implements AfterContentInit {
  @Input() public title = '';
  @Input('chevron-class') public chevronClass = 'fas fa-angle-down';

  public isActive = false;

  private _isHoverable = false;
  private _isRight = false;
  private _isUp = false;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  public get isHoverable(): boolean {
    return this._isHoverable;
  }

  @Input('is-hoverable')
  public set isHoverable(input: string | boolean) {
    if (typeof input === 'string') {
      if (input.toLocaleLowerCase() === 'true') {
        this._isHoverable = true;
      } else {
        this._isHoverable = false;
      }
    } else {
      this._isHoverable = input;
    }
  }

  public get isRight(): boolean {
    return this._isRight;
  }

  @Input('is-right')
  public set isRight(input: string | boolean) {
    if (typeof input === 'string') {
      if (input.toLowerCase() === 'true') {
        this._isRight = true;
      } else {
        this._isRight = false;
      }
    } else {
      this._isRight = input;
    }
  }

  public get isUp(): boolean {
    return this._isUp;
  }

  @Input('is-up')
  public set isUp(input: string | boolean) {
    if (typeof input === 'string') {
      if (input.toLowerCase() === 'true') {
        this._isUp = true;
      } else {
        this._isUp = false;
      }
    } else {
      this._isUp = input;
    }
  }

  public ngAfterContentInit() {
    this.cdr.detectChanges();
  }

  public toggleIsActive() {
    if (!this.isHoverable) {
      this.isActive = !this.isActive;
    }
  }
}

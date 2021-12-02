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
  @Input() title = '';
  @Input('chevron-class') chevronClass = 'fas fa-angle-down';
  @Input('is-hoverable') isHoverable = false;
  @Input('is-right') isRight = false;
  @Input('is-up') isUp = false;

  public isActive = false;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  public ngAfterContentInit() {
    this.cdr.detectChanges();
  }

  public toggleIsActive() {
    if (!this.isHoverable) {
      this.isActive = !this.isActive;
    }
  }
}

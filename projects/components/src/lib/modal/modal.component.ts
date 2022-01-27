import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bu-modal',
  /* eslint-disable prettier/prettier */
  template: `
    <div class="modal"
      [ngClass]="{ 'is-active': show }"
    >
      <div class="modal-background" (click)="toggleShow()"></div>
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
      <button class="modal-close is-large"
        aria-label="close"
        (click)="toggleShow()"
      ></button>
    </div>
  `
  /* eslint-enable prettier/prettier */
})
export class BulmaModalComponent {
  @Input() public show = false;

  @Output() showChange = new EventEmitter<boolean>();

  constructor() {}

  public toggleShow() {
    this.show = !this.show;
    this.showChange.emit(this.show);
  }
}

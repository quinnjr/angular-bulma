import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'bu-modal',
  /* eslint-disable prettier/prettier */
  template: `
    <div class="modal"
      [ngClass]="{ 'is-active': show }"
    >
      <div class="modal-background" (click)="toggleShow()"></div>
      <ng-container *ngIf="!card; then modalBlock else cardBlock"></ng-container>
      <ng-template #modalBlock>
        <div class="modal-content">
          <ng-content></ng-content>
        </div>
        <button class="modal-close is-large"
          aria-label="close"
          (click)="toggleShow()"
        ></button>
      </ng-template>
      <ng-template #cardBlock>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{{ cardTitle }}</p>
          </header>
          <section class="modal-card-body">
            <ng-content></ng-content>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success"
              *ngIf="submit"
              (click)="submitAction">{{ submitText }}</button>
            <button class="button" (click)="toggleShow()">
              <ng-container *ngIf="closeText.length > 0; else closeBlock">{{ closeText }}</ng-container>
              <ng-template #closeBlock>Close</ng-template>
            </button>
          </footer>
        </div>
      </ng-template>
    </div>
  `
  /* eslint-enable prettier/prettier */
})
export class BulmaModalComponent implements OnInit, OnDestroy {
  @Input() public show = false;
  @Input() public card = false;
  @Input('card-title') public cardTitle = '';
  @Input('close-text') public closeText = '';
  @Input('close-action') public closeAction?: () => void;
  @Input('submit') public submit = false;
  @Input('submit-text') public submitText = 'Submit';
  @Input('submit-action') public submitAction?: () => void;

  @Output() showChange = new EventEmitter<boolean>();

  private observer?: MutationObserver;
  private node?: HTMLDivElement;

  constructor(private readonly elementRef: ElementRef) {
    if (typeof this.closeAction === 'function') {
      this.node = this.elementRef.nativeElement.querySelector('.modal');

      this.observer = new MutationObserver(() => {
        if (typeof this.closeAction === 'function') {
          this.closeAction();
        }
      });
    }
  }

  public ngOnInit() {
    if (this.observer && this.node) {
      this.observer.observe(this.node, {
        attributeFilter: ['class']
      });
    }
  }

  public ngOnDestroy() {
    this.observer?.disconnect();
    this.showChange.closed = true;
  }

  public toggleShow() {
    this.showChange.emit(!this.show);
    this.show = !this.show;
  }
}

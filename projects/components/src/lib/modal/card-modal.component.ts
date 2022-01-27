import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'bu-card-modal',
  /* eslint-disable prettier/prettier */
  template: `
    <div class="modal"
      [ngClass]="{ 'is-active': show }"
    >
      <div class="modal-background" (click)="toggleShow()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
        </header>
        <section class="modal-card-body">
          <ng-content></ng-content>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success"
            *ngIf="submit && submitAction"
            (click)="submitAction()"
          >
            {{ submitText }}
          </button>
          <button class="button" (click)="toggleShow()">
            <ng-container *ngIf="closeText.length > 0; else closeBlock">
              {{ closeText }}
            </ng-container>
            <ng-template #closeBlock>Close</ng-template>
          </button>
        </footer>
      </div>
    </div>
  `
  /* eslint-disable prettier/prettier */
})
export class BulmaCardModalComponent implements OnInit, OnDestroy {
  @Input() public show = false;
  @Input() public title = '';
  @Input('close-text') public closeText = '';
  @Input('close-action') public closeAction?: () => void;
  @Input() public submit = false;
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

  public ngOnInit(): void {
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
    this.show = !this.show;
    this.showChange.emit(this.show);
  }
}

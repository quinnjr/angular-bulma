import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
  QueryList,
  ViewChild
} from '@angular/core';
import merge from 'lodash.mergewith';

import { BulmaCarouselOptions } from './carousel-options';
import { BulmaCarouselDefaultOptions } from './default-options';

@Component({
  selector: 'bu-carousel-item',
  template: `
    <ng-template #carousel>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class BulmaCarouselItemComponent {
  @ViewChild(TemplateRef) public templateRef!: TemplateRef<any>;

  constructor() {}
}

@Component({
  selector: 'bu-carousel',
  template: `
    <div class="carousel">
      <div class="slider-container">
        <ng-container *ngFor="let item of items; let idx = index">
          <ng-container *ngTemplateOutlet="item.templateRef"></ng-container>
        </ng-container>
        <div class="slider-navigation-previous"
          [ngClass]="{ 'is-hidden': false }">
        </div>
        <div class="slider-navigation-next"
          [ngClass]="{ 'is-hidden': false }">
        </div>
        <div class="slider-pagination">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./carousel.component.scss']
})
export class BulmaCarouselComponent implements OnInit {

  @ContentChildren(BulmaCarouselItemComponent) items!: QueryList<BulmaCarouselItemComponent>;

  public events: EventEmitter<any> = new EventEmitter();

  private _options: BulmaCarouselOptions = BulmaCarouselDefaultOptions;

  constructor(
    private readonly elementRef: ElementRef
  ) {}

  public get options() {
    return this._options;
  }

  @Input()
  public set options(val: BulmaCarouselOptions) {
    this._options = merge(this._options, val);
  }

  public ngOnInit() {
    const prevButton = document.createElement('template');
    prevButton.innerHTML = this.options.icons.previous;
    this.elementRef.nativeElement.querySelector('.slider-navigation-previous').append(prevButton);

    const nextButton = document.createElement('template');
    nextButton.innerHTML = this.options.icons.next;
    this.elementRef.nativeElement.querySelector('.slider-navigation-next').append(nextButton);
  }
}

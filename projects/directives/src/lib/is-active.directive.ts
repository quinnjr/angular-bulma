import { Directive, Input, ElementRef, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[bu-is-active]'
})
export class IsActiveDirective implements OnInit, OnChanges {
  @Input() isActive: boolean = true;

  constructor(private readonly el: ElementRef) {}

  public ngOnInit() {
    if (this.isActive) {
      this.el.nativeElement.classList.add('is-active');
    } else {
      this.el.nativeElement.classList.remove('is-active');
    }
  }

  public ngOnChanges() {
    if (this.isActive) {
      this.el.nativeElement.classList.add('is-active');
    } else {
      this.el.nativeElement.classList.remove('is-active');
    }
  }
}

import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'bu-breadcrumb',
  template: `
    <ng-template #breadcrumb>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class BulmaBreadcrumbComponent implements AfterContentInit {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  public ngAfterContentInit() {
    this.cdr.detectChanges();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulmaBreadcrumbComponent } from '.';

import { BulmaBreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbComponent', () => {
  let component: BulmaBreadcrumbsComponent;
  let fixture: ComponentFixture<BulmaBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [BulmaBreadcrumbsComponent, BulmaBreadcrumbComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

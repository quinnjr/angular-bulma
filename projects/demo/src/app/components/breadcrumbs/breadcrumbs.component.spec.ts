import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulmaBreadcrumbsModule } from '../../../../../components/src/public-api';
import { CodeSnippetComponent } from '../../code-snippet/code-snippet.component';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulmaBreadcrumbsModule],
      declarations: [BreadcrumbsComponent, CodeSnippetComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

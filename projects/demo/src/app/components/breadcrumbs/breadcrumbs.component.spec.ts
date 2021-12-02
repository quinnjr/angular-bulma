import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BulmaBreadcrumbsModule,
  BulmaNavbarModule,
  BulmaMenuModule
} from '../../../../../components/src/public-api';
import { CodeSnippetComponent } from '../../code-snippet/code-snippet.component';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulmaBreadcrumbsModule, BulmaNavbarModule, BulmaMenuModule],
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

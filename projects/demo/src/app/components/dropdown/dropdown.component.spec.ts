import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BulmaDropdownModule,
  BulmaNavbarModule,
  BulmaMenuModule
} from '../../../../../components/src/public-api';
import { CodeSnippetComponent } from '../../code-snippet/code-snippet.component';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulmaDropdownModule, BulmaNavbarModule, BulmaMenuModule],
      declarations: [DropdownComponent, CodeSnippetComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

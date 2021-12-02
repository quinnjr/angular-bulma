import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BulmaNavbarModule,
  BulmaMenuModule
} from '../../../../../components/src/public-api';
import { CodeSnippetComponent } from '../../code-snippet/code-snippet.component';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulmaNavbarModule, BulmaMenuModule],
      declarations: [NavbarComponent, CodeSnippetComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

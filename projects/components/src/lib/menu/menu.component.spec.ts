import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulmaMenuLabelComponent, BulmaMenuListComponent } from '.';

import { BulmaMenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: BulmaMenuComponent;
  let fixture: ComponentFixture<BulmaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BulmaMenuComponent,
        BulmaMenuListComponent,
        BulmaMenuLabelComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

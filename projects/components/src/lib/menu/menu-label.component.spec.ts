import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMenuLabelComponent } from './menu-label.component';

describe('MenuLabelComponent', () => {
  let component: BulmaMenuLabelComponent;
  let fixture: ComponentFixture<BulmaMenuLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulmaMenuLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMenuLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

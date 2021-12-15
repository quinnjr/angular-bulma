import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaAlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: BulmaAlertComponent;
  let fixture: ComponentFixture<BulmaAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulmaAlertComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaCardModalComponent } from './card-modal.component';

describe('CardModalComponent', () => {
  let component: BulmaCardModalComponent;
  let fixture: ComponentFixture<BulmaCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulmaCardModalComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

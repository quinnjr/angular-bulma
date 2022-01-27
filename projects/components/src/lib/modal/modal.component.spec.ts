import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: BulmaModalComponent;
  let fixture: ComponentFixture<BulmaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulmaModalComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

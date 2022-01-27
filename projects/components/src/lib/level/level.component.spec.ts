import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaLevelComponent } from './level.component';

describe('LevelComponent', () => {
  let component: BulmaLevelComponent;
  let fixture: ComponentFixture<BulmaLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulmaLevelComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

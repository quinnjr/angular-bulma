import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulmaCarouselModule } from '../../../../components/src/public-api';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulmaCarouselModule],
      declarations: [ CarouselComponent, CodeSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

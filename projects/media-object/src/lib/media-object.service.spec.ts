import { TestBed } from '@angular/core/testing';

import { MediaObjectService } from './media-object.service';

describe('MediaObjectService', () => {
  let service: MediaObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

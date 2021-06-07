import { TestBed } from '@angular/core/testing';

import { NgRatingService } from './ng-rating.service';

describe('NgRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgRatingService = TestBed.get(NgRatingService);
    expect(service).toBeTruthy();
  });
});

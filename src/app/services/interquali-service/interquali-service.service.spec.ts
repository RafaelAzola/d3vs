import { TestBed } from '@angular/core/testing';

import { InterqualiServiceService } from './interquali-service.service';

describe('InterqualiServiceService', () => {
  let service: InterqualiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterqualiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

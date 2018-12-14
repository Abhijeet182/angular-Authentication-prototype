import { TestBed } from '@angular/core/testing';

import { SignupapiService } from './signupapi.service';

describe('SignupapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupapiService = TestBed.get(SignupapiService);
    expect(service).toBeTruthy();
  });
});

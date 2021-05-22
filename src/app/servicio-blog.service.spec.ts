import { TestBed } from '@angular/core/testing';

import { ServicioBlogService } from './servicio-blog.service';

describe('ServicioBlogService', () => {
  let service: ServicioBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

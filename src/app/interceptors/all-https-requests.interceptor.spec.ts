import { TestBed } from '@angular/core/testing';

import { AllHttpsRequestsInterceptor } from './all-https-requests.interceptor';

describe('AllHttpsRequestsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AllHttpsRequestsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AllHttpsRequestsInterceptor = TestBed.inject(AllHttpsRequestsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

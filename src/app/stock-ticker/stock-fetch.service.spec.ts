import { TestBed, inject } from '@angular/core/testing';

import { StockFetchService } from './stock-fetch.service';

describe('StockFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockFetchService]
    });
  });

  it('should be created', inject([StockFetchService], (service: StockFetchService) => {
    expect(service).toBeTruthy();
  }));
});

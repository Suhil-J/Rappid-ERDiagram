import { TestBed } from '@angular/core/testing';

import { ErDiagramServiceService } from './er-diagram-service.service';

describe('ErDiagramServiceService', () => {
  let service: ErDiagramServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErDiagramServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { ApplicationsInformationService } from './applications-information.service';

describe('ApplicationsInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationsInformationService]
    });
  });

  it('should be created', inject([ApplicationsInformationService], (service: ApplicationsInformationService) => {
    expect(service).toBeTruthy();
  }));
});

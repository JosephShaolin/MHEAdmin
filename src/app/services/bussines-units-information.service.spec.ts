import { TestBed, inject } from '@angular/core/testing';

import { BussinesUnitsInformationService } from './bussines-units-information.service';

describe('BussinesUnitsInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BussinesUnitsInformationService]
    });
  });

  it('should be created', inject([BussinesUnitsInformationService], (service: BussinesUnitsInformationService) => {
    expect(service).toBeTruthy();
  }));
});

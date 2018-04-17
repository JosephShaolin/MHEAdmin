import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitDetailComponent } from './business-unit-detail.component';

describe('BusinessUnitDetailComponent', () => {
  let component: BusinessUnitDetailComponent;
  let fixture: ComponentFixture<BusinessUnitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUnitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

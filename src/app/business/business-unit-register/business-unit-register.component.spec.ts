import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitRegisterComponent } from './business-unit-register.component';

describe('BusinessUnitRegisterComponent', () => {
  let component: BusinessUnitRegisterComponent;
  let fixture: ComponentFixture<BusinessUnitRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUnitRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

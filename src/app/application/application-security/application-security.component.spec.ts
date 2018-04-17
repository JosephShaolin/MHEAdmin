import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSecurityComponent } from './application-security.component';

describe('ApplicationSecurityComponent', () => {
  let component: ApplicationSecurityComponent;
  let fixture: ComponentFixture<ApplicationSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

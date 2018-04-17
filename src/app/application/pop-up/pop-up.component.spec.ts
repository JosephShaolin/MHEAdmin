import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUp } from './pop-up.component';

describe('ModalComponent', () => {
  let component: PopUp;
  let fixture: ComponentFixture<PopUp>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUp ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

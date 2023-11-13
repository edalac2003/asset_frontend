import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailUserComponent } from './form-detail-user.component';

describe('FormDetailUserComponent', () => {
  let component: FormDetailUserComponent;
  let fixture: ComponentFixture<FormDetailUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDetailUserComponent]
    });
    fixture = TestBed.createComponent(FormDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

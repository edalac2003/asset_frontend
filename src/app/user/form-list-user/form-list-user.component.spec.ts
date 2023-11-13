import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListUserComponent } from './form-list-user.component';

describe('FormListComponent', () => {
  let component: FormListUserComponent;
  let fixture: ComponentFixture<FormListUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormListUserComponent]
    });
    fixture = TestBed.createComponent(FormListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

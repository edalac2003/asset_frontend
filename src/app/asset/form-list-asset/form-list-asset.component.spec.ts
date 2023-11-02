import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListAssetComponent } from './form-list-asset.component';

describe('FormListAssetComponent', () => {
  let component: FormListAssetComponent;
  let fixture: ComponentFixture<FormListAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormListAssetComponent]
    });
    fixture = TestBed.createComponent(FormListAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

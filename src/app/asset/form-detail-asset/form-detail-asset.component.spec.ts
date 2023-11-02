import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailAssetComponent } from './form-detail-asset.component';

describe('FormDetailAssetComponent', () => {
  let component: FormDetailAssetComponent;
  let fixture: ComponentFixture<FormDetailAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDetailAssetComponent]
    });
    fixture = TestBed.createComponent(FormDetailAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

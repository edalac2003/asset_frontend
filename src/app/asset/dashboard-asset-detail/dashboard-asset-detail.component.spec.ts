import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAssetDetailComponent } from './dashboard-asset-detail.component';

describe('DashboardAssetDetailComponent', () => {
  let component: DashboardAssetDetailComponent;
  let fixture: ComponentFixture<DashboardAssetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAssetDetailComponent]
    });
    fixture = TestBed.createComponent(DashboardAssetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

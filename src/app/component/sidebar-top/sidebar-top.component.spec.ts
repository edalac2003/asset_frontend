import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTopComponent } from './sidebar-top.component';

describe('SidebarTopComponent', () => {
  let component: SidebarTopComponent;
  let fixture: ComponentFixture<SidebarTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarTopComponent]
    });
    fixture = TestBed.createComponent(SidebarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

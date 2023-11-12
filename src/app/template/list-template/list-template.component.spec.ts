import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemplateComponent } from './list-template.component';

describe('ListTemplateComponent', () => {
  let component: ListTemplateComponent;
  let fixture: ComponentFixture<ListTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTemplateComponent]
    });
    fixture = TestBed.createComponent(ListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

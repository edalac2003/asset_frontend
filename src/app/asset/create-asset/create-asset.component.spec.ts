import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CreateAssetComponent } from './create-asset.component';
import { CategoryService } from 'src/app/services/category.service';
import { HttpClientModule } from '@angular/common/http'; 

describe('CreateAssetComponent', () => {
  let component: CreateAssetComponent;
  let fixture: ComponentFixture<CreateAssetComponent>;
  let categoryServiceSpy: jasmine.SpyObj<CategoryService>;

  beforeEach(() => { 
    categoryServiceSpy = jasmine.createSpyObj('CategoryService', ['getCategories']);
    
    TestBed.configureTestingModule({
      declarations: [CreateAssetComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule], 
      providers: [
        { provide: CategoryService, useValue: categoryServiceSpy }
      ],
    });

    fixture = TestBed.createComponent(CreateAssetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch categories on initialization', () => {
    const categories = [
      { id: 1, name: 'Category 1', description: 'Description for Category 1', status: true },
      { id: 2, name: 'Category 2', description: 'Description for Category 2', status: false },
      { id: 3, name: 'Category 3', description: 'Description for Category 3', status: true }
    ];

    categoryServiceSpy.getCategories.and.returnValue(of(categories));

    fixture.detectChanges();

    expect(component.listCategories).toEqual(categories);
  });

});

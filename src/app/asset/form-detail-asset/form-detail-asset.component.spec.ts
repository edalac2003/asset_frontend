import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { FormDetailAssetComponent } from './form-detail-asset.component';
import { AssetDTO } from 'src/app/model/AssetDTO';

describe('FormDetailAssetComponent', () => {
  let component: FormDetailAssetComponent;
  let fixture: ComponentFixture<FormDetailAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDetailAssetComponent],
      imports: [ReactiveFormsModule],
    });

    fixture = TestBed.createComponent(FormDetailAssetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display asset details when assetDTO is provided', () => {
    const assetDTO: AssetDTO = {
      id: 1,
      assetCode: '123',
      location: 'Location 1',
      category: { id: 1, name: 'Category 1', description: 'Description for Category 1', status: true },
      userResponsible: {
        id: 1,
        userName: 'User 1',
        person: {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          birthday: '1990-01-01',
          genre: 'Male',
          identificationType: { id: 1, name: 'ID Type', abbreviation: 'IDT' },
          identificationNumber: '123456789',
          city: { id: 1, name: 'City 1', status: true, state: 'State 1' },
          status: true
        }
      },
      properties: [
        { id: 1, assetId: 1, property: { id: 1, name: 'Property 1', description: 'Description 1' }, value: 'Value 1' },
        { id: 2, assetId: 1, property: { id: 2, name: 'Property 2', description: 'Description 2' }, value: 'Value 2' },
      ],
      purchaseValue: 0,
      purchaseDate: '',
      usefullLifetime: 0,
      status: false
    };

    component.assetDTO = assetDTO;
    component.ngOnChanges({ assetDTO: { currentValue: assetDTO, firstChange: true, isFirstChange: () => true, previousValue: null } });
    fixture.detectChanges();

    expect(component.formDetail.controls['assetCode'].value).toBe('123');
    expect(component.formDetail.controls['location'].value).toBe('Location 1');
    expect(component.formDetail.controls['category'].value).toBe('Category 1');
    expect(component.formDetail.controls['responsible'].value).toBe('John Doe');
    expect(component.listProperties).toEqual(assetDTO.properties);
  });
});

import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/app/model/CategoryDTO';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { AssetService } from 'src/app/services/asset.service';
import { AssetDTO } from 'src/app/model/AssetDTO';
import { Router } from '@angular/router';
import { PropertyDTO } from 'src/app/model/PropertyDTO';
import { PropertyService } from 'src/app/services/property.service';
import { AssetTypeDTO } from 'src/app/model/AssetTypeDTO';
import { AssetTypeService } from 'src/app/services/asset-type.service';
import { AssetTypeDetailDTO } from 'src/app/model/AssetTypeDetailDTO';
import {ResponsableService } from 'src/app/services/responsable.service'
import { UserDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {
  listCategories: Array<CategoryDTO> = [];
  listProperties: Array<PropertyDTO> = [];
  listAssetType: Array<AssetTypeDTO> = [];
  listAssetTypeDetail: Array<AssetTypeDetailDTO> = [];
  listResponsable: Array<UserDTO> = [];
  filterListAssetType: Array<AssetTypeDTO> = [];
  selectedProperties: Array<PropertyDTO> = [];
  selectedProperty!: PropertyDTO;
  selectedCategory!: CategoryDTO;
  selectedAssetType!: AssetTypeDTO;
  selectedAssetTypeDetail!: AssetTypeDTO;
  selecteduserResponsible!: UserDTO;
  formulario!: FormGroup; 
  dynamicFormControls: { [key: string]: FormControl } = {}; 


  constructor(
    private categoryService: CategoryService,
    private propertyService: PropertyService,
    private assetService: AssetService,
    private formBuilder: FormBuilder,
    private assetTypeService : AssetTypeService,
    private responsableService : ResponsableService,
    private router: Router
  ){   }

  ngOnInit(): void {
    this.getCategories();
    this.getProperties();
    this.getAssetType();
    this.getResponsable();
    this.formulario = this.formBuilder.group({
      assetCode: ['', Validators.required],
      category: ['', Validators.required],
      purchaseValue: ['', Validators.required],
      purchaseDate: [''],
      userResponsible: [''],
      usefullLifetime: [''],
      properties: [''],
      location:[''],
      assetType:[''],
    });
    
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( data => {
      this.listCategories = data;
    });
  }

  getProperties(){
    this.propertyService.getProperties().subscribe( data => {
      this.listProperties = data;
    });
  }

  getAssetType(){
    this.assetTypeService.findAll().subscribe( data => {
      this.listAssetType = data
    });    
  }

  getResponsable(){
    this.responsableService.findAll().subscribe( data => {
      this.listResponsable = data
    });
    
  }  

  onSelectAssetTypeDetail(){
    this.clearDynamicFormControls();
    var assetTypeID = this.formulario.get('assetType')?.value;
    this.selectedAssetTypeDetail = this.findAssetTypeDetailSelected(Number(assetTypeID));
    
    this.listAssetTypeDetail = this.selectedAssetTypeDetail.details;

    this.listAssetTypeDetail.forEach(detail => {
      this.dynamicFormControls[detail?.property?.name || 'defaultName'] = new FormControl('');
    });
    this.formulario.addControl('properties', new FormGroup(this.dynamicFormControls));  

  }  

  onSelectCategory(){
    this.clearDynamicFormControls();
    this.listAssetTypeDetail = [] as AssetTypeDetailDTO[];
    this.selectedAssetType = {} as AssetTypeDTO;
    this.formulario.patchValue({
      assetType: ''
    });
    var categoryID = this.formulario.get('category')?.value;
    this.selectedCategory = this.findCategorySelected(Number(categoryID));
    this.filterListAssetType = this.filterAssetType(Number(categoryID));

  }

  onSelectAssetType(){
    var AssetTypeID = this.formulario.get('assetType')?.value;
    this.selectedAssetType = this.findAssetTypeSelected(Number(AssetTypeID));  
      
  }

  onSelectUserResponsible(){
    var userResponsibleID = this.formulario.get('userResponsible')?.value;
    this.selecteduserResponsible = this.findUserResponsibleSelected(Number(userResponsibleID));
  }

  clearDynamicFormControls() {
    Object.keys(this.dynamicFormControls).forEach(controlName => {
      this.formulario.removeControl(controlName);
    });
    this.dynamicFormControls = {};
  }

  private findUserResponsibleSelected(userResponsibleID: number): UserDTO{
    return this.listResponsable.find(r => r.id == Number(userResponsibleID))!;
  }

  private findCategorySelected(categoryID: number): CategoryDTO{
    return this.listCategories.find(c => c.id == Number(categoryID))!;
  }

  private findAssetTypeSelected(AssetTypeID: number): AssetTypeDTO{
    return this.filterListAssetType.find(a => a.id == Number(AssetTypeID))!;
  }

  private findAssetTypeDetailSelected(assetTypeID: number): AssetTypeDTO{
    return this.filterListAssetType.find(a => a.id == Number(assetTypeID))!;
  }

  private filterAssetType(categoryID: number){
    return this.listAssetType.filter(
      (assetType) => assetType.category?.id === categoryID
    );
  }


  createAsset(){
    if (this.formulario.valid) {
      let asset = this.formulario.value;
      console.log('asset',asset);
      asset.category = this.selectedCategory;
      asset.properties = this.listAssetTypeDetail.map(
        ({
          property,
        }) => ({
          property,
          value: Object.keys(this.dynamicFormControls).forEach((propertyName) => {
            propertyName === property.name ? this.dynamicFormControls[propertyName]?.value: null;            
          }),
        })
      );
      
      this.assetService.postCreateAsset(asset).subscribe(() => {
      this.router.navigate(['/list-asset']);
      });
    } 
  }
}

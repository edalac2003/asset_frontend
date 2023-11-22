import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/config/config.service';
import { AssetTypeDTO } from 'src/app/model/AssetTypeDTO';
import { AssetTypeDetailDTO } from 'src/app/model/AssetTypeDetailDTO';
import { CategoryDTO } from 'src/app/model/CategoryDTO';
import { PropertyDTO } from 'src/app/model/PropertyDTO';
import { AssetTypeService } from 'src/app/services/asset-type.service';
import { CategoryService } from 'src/app/services/category.service';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  // listCategory : CategoryDTO[] = [];
  listCategories: Array<CategoryDTO> = [];
  listProperty : PropertyDTO[] = [];
  selectedProperties: Array<PropertyDTO> = [];

  formulario = new FormGroup({
    categoryOption: new FormControl('', Validators.required),
    templateName: new FormControl('', Validators.required),
    propertyOption: new FormControl('', Validators.required)
  });
  

  // selectedProperty: PropertyDTO | any;
  selectedCategory!: CategoryDTO;
  controlProperty: any;

  constructor(
    private categoryService: CategoryService,
    private propertyService: PropertyService,
    private assetTypeService: AssetTypeService,
    private router: Router
  ){   }
  

  ngOnInit(): void {
    this.getCategories();
    this.getProperties();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( data => {
      this.listCategories = data;
    });
  }

  getProperties(){
    this.propertyService.getProperties().subscribe( data => {
      this.listProperty = data;
    })
  }

  addProperty(){
    var propertyID = this.formulario.get('propertyOption')?.value;
    if(propertyID != ''){
      if(!this.findPropertyInSelected(Number(propertyID))){
        this.selectedProperties.push(this.findProperty(Number(propertyID))!);
      }else{
        alert('Ya está incluído. Intente con otra propiedad');
      }
    }
  }

  onSelectProperty(){
    // var propertyID = this.formulario.get('propertyOption')?.value;
    // this.selectedProperties.push(this.findProperty(Number(propertyID))!);
  }

  onSelectCategory(){
    var categoryID = this.formulario.get('categoryOption')?.value;
    this.selectedCategory = this.findCategorySelected(Number(categoryID));
    // this.listCategory = this.formulario.get('categoryOption')?.value;
  }

  private findCategorySelected(id: number): CategoryDTO{
    return this.listCategories.find(c => c.id == Number(id))!;
  }


  private findProperty(id: number): PropertyDTO{
    return this.listProperty.find(p => p.id == Number(id))!;
  }

  private findPropertyInSelected(id: number): PropertyDTO{
    return this.selectedProperties.find(p => p.id == Number(id))!;
  }



  validateFormData(): boolean{
    var assetTypeDTO = new AssetTypeDTO();
    assetTypeDTO.name = String(this.formulario.get('templateName')?.value);
    assetTypeDTO.category = this.selectedCategory;
    var listAssetDetail = new Array<AssetTypeDetailDTO>;
    
    this.selectedProperties.forEach(p => {
      var assetTypeDetailDTO = new AssetTypeDetailDTO();
      assetTypeDetailDTO.property = this.findProperty(p.id);
      assetTypeDetailDTO.propertyId = p.id;
      listAssetDetail.push(assetTypeDetailDTO);
    });
    assetTypeDTO.details = listAssetDetail;
    if(assetTypeDTO.name && assetTypeDTO.category && assetTypeDTO.details && assetTypeDTO.details.length > 0){
      console.log(assetTypeDTO);
      this.createAssetType(assetTypeDTO);
      return true;
    }else{
      alert('Faltan campos por diligenciar');
    }
    return false;
  }

  createAssetType(assetTypeDTO: AssetTypeDTO){    
    var response = this.assetTypeService.create(assetTypeDTO).subscribe(
      data => console.log(data)
    );
    this.router.navigate(['list-template']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/app/model/CategoryDTO';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { AssetService } from 'src/app/services/asset.service';
import { AssetDTO } from 'src/app/model/AssetDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {
  listCategories: Array<CategoryDTO> = [];
  selectedCategory!: CategoryDTO;
  formulario!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private assetService: AssetService,
    private formBuilder: FormBuilder,
    private router: Router
  ){   }

  ngOnInit(): void {
    this.getCategories();
    this.formulario = this.formBuilder.group({
      assetCode: ['', Validators.required], // Código con validación requerida
      categoryOption: ['', Validators.required], // Categoría con validación requerida
      purchaseValue: ['', Validators.required], // Valor de Compra con validación requerida
      purchaseDate: [''], // Fecha de Compra
      userResponsible: [''], // Responsable
      usefullLifetime: [''], // Tiempo de Vida Útil
    });
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( data => {
      this.listCategories = data;
    });
  }

  onSelectCategory(){
    var categoryID = this.formulario.get('categoryOption')?.value;
    this.selectedCategory = this.findCategorySelected(Number(categoryID));
  }

  private findCategorySelected(id: number): CategoryDTO{
    return this.listCategories.find(c => c.id == Number(id))!;
  }

  createAsset(){
    if (this.formulario.valid) {
      let asset = this.formulario.value;
      asset.category = this.selectedCategory
      asset.status = true
      this.assetService.postCreateAsset(asset).subscribe();
    } 
    this.router.navigate(['/list-asset']);
  }



}

// form-list-asset.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AssetDTO } from 'src/app/model/AssetDTO';
import { CategoryDTO } from 'src/app/model/CategoryDTO';
import { AssetService } from 'src/app/services/asset.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-form-list-asset',
  templateUrl: './form-list-asset.component.html',
  styleUrls: ['./form-list-asset.component.css'],
})


export class FormListAssetComponent implements OnInit {
  @ViewChild('categorySelect') categorySelect!: ElementRef;
  @ViewChild('assetCodePrefixSelect') assetCodePrefixSelect!: ElementRef;

  listCategories: CategoryDTO[] = [];
  listAsset$: Observable<AssetDTO[]> | undefined;
  formulario!: FormGroup;
  selectedCategoryId: number | null = null;
  assetCodePrefix: string | null = null;

  constructor(
    private assetService: AssetService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.findAssetList();
    this.listAsset$ = this.assetService.activos$;  
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.listCategories = data;
    });
  }

  findAssetList() {
    this.assetService.getAssetFindAll().subscribe(() => {
    });
  }

  onSelectCategory(event: any){
    this.selectedCategoryId = event.target.value;
    this.assetCodePrefix = null
    this.assetCodePrefixSelect.nativeElement.value = '';
    if (this.selectedCategoryId){
      this.assetService.getAssetFindAllByCategory(this.selectedCategoryId).subscribe(() => {
      });
      return
    }
    this.findAssetList();
  }

  onInputChange(event: any){
    this.assetCodePrefix = event.target.value;
    this.selectedCategoryId = null;
    this.categorySelect.nativeElement.value = '';
    if (this.assetCodePrefix!.length >= 3) {
      this.assetService.getFilteredAssetsByCode(this.assetCodePrefix!).subscribe(() => {
      });
      return
    }
    this.findAssetList();
  }

}

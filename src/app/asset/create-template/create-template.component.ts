import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { CategoryDTO } from 'src/app/model/CategoryDTO';
import { PropertyDTO } from 'src/app/model/PropertyDTO';
import { CategoryService } from 'src/app/services/category.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private propertyService: PropertyService
  ){ }
  
  listCategory : CategoryDTO[] = [];
  listProperty : PropertyDTO[] = [];
  selectedProperties: PropertyDTO[] = [];

  selectedProperty: PropertyDTO | undefined;
  controlProperty: any;

  ngOnInit(): void {
    this.getCategories();
    this.getProperties();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( data => {
      this.listCategory = data;
    });
  }

  getProperties(){
    this.propertyService.getCategories().subscribe( data => {
      this.listProperty = data;
    })
  }

  addProperty(){
    console.log(". Aqui estoy.   " + this.selectedProperty);
  }

  onSelectProperty(){
    var propertyGroup = document.querySelector("#propertyGroup");
  }

}

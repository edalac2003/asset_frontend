import { Component, OnInit } from '@angular/core';
import { PropertyDTO } from 'src/app/model/PropertyDTO';

@Component({
  selector: 'app-detail-template',
  templateUrl: './detail-template.component.html',
  styleUrls: ['./detail-template.component.css']
})
export class DetailTemplateComponent implements OnInit{

  listProperties: PropertyDTO[] = [];

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

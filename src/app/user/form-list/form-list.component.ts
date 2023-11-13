import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent {

  listUser: Array<UserDTO> = [];
  searchForm = new FormGroup({

  });
}

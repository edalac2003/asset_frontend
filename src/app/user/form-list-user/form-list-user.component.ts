import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDTO } from 'src/app/model/userDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'form-list-user',
  templateUrl: './form-list-user.component.html',
  styleUrls: ['./form-list-user.component.css']
})
export class FormListUserComponent implements OnInit{

  listUser: Array<UserDTO> = [];
  searchForm = new FormGroup({

  });

  constructor( private userService:UserService ){}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.findAll().then(
      resp => {
        resp.subscribe( data => this.listUser = data )
      }
    ).then();
  }
}

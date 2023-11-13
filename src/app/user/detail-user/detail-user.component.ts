import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit, OnChanges{

  @Input() user = new UserDTO;
  @Output() newItemEvent = new EventEmitter<UserDTO>();

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    numberPhone: new FormControl('', [Validators.required])
  });

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //TODO. Cuando se pulse el boton guardar debe responder el objeto Creado/Actualizado
  save(userDTO: UserDTO){
    this.newItemEvent.emit(userDTO);
  }
}

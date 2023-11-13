import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario!: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const user = { 
      username: this.formulario.get('user')?.value,
      password: this.formulario.get('password')?.value
    };
    if(user){
      user.username == 'admin' && user.password == 'admin' ? this.authService.setSession(user) : alert('Usuario o Contraseña Incorrectos');
    }
    
  }
}

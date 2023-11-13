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
  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

  login(): void {
    var username = this.formulario.get('user')?.value;
    var password = this.formulario.get('password')?.value;
    this.authService.login(username, password);
    this.router.navigate(['/dashboard']);
  }
}

// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router) {}

  // Función para almacenar información de sesión
  setSession(user: any): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/dashboard']); // Redirige al usuario a la página de dashboard después de iniciar sesión
  }

  // Función para obtener información de sesión
  getSession(): any {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Función para cerrar sesión
  logout(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
  }
}

// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor() { }

  isLoggedIn(){
    return this.loggedIn
  }

  login(username: string, password: string):void {
    if(username == 'admin' && password == 'admin'){
      this.loggedIn = true;
      this.isLoggedInSubject.next(true);
    }
  }

  logout():void  {
    // Lógica de cierre de sesión aquí
    this.loggedIn = false;
    this.isLoggedInSubject.next(false);
    
  }
}

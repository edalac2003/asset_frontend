import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'sidebar-top',
  templateUrl: './sidebar-top.component.html',
  styleUrls: ['./sidebar-top.component.css']
})
export class SidebarTopComponent {
  // isLoggedIn: boolean = false;
  // isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  isLoggedIn(): boolean {
    return this.authService.getSession() !== null;
  }

  logout() {
    this.authService.logout();
  }
}

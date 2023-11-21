import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.getSession() !== null;
  }
}

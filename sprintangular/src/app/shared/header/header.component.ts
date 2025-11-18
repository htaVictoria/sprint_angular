import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavService } from '../../services/nav/nav.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private navService: NavService, private authService: AuthService, private router: Router) {}

  abrirNav() {
    this.navService.alternarNav();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }



}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerContainer, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavService } from '../../services/nav/nav.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatDrawerContainer, CommonModule, MatDrawerContent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navAberto = false;

  constructor(private navService: NavService) {}

  ngOnInit() {
    this.navService.navAberto$.subscribe(estado => {
      this.navAberto = estado;
    });
  }

}

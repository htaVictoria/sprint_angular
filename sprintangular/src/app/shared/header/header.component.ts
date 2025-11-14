import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from "@angular/material/toolbar";
import { NavService } from '../../services/nav/nav.service';



@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule, MatToolbar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private navService: NavService) {}

  abrirNav() {
    this.navService.alternarNav();
  }

}

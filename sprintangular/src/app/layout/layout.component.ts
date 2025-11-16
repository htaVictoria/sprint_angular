import { Component } from '@angular/core';
import { HomeComponent } from "../components/home/home.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

@Component({
  selector: 'app-layout',
  imports: [HomeComponent, DashboardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}

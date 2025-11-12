import { Component } from '@angular/core';
import { HomeComponent } from "../components/home/home.component";

@Component({
  selector: 'app-layout',
  imports: [HomeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}

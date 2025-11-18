import {Component} from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeaderComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  



}

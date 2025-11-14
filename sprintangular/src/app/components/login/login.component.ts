
import { CommonModule } from '@angular/common';
import { Component,} from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  

  usuario = {
    nome: '',
    senha: '',
  }

  erro: any

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  fazerLogin() {
    this.authService.login(this.usuario).subscribe({
      next: (res) => {
        this.router.navigate(['/home']);
      },
      error: (_err) => {
        this.erro = "Usuário ou senha inválidos";
      }
    });
  }
}

  

  


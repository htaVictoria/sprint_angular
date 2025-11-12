
import { CommonModule } from '@angular/common';
import { Component, inject,} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';




@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm: FormGroup = new FormGroup({
    nome: new FormControl(""),
    senha: new FormControl("")
  });

  private authService = inject(AuthService);
  private router = inject(Router);

  onLogin() {
    if (!this.loginForm.valid) {
      alert('Preencha todos os campos!');
      return;
    }

    const formValue = this.loginForm.value;

    this.authService.login(formValue).subscribe({
      next: (response: any) => {
        if (response.id) {
          alert(`Bem-vindo(a), ${response.nome}!`);
          this.router.navigateByUrl('/home');
        } else {
          alert('Usuário ou senha incorretos!');
        }
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao fazer login!');
      }
    });
  }
}

  

  


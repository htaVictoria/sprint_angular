import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3001/login';

  constructor(private http: HttpClient, ) {}

  login(usuario: Pick<Usuario,'nome'| 'senha'>):Observable<Usuario>{
    return this.http.post<Usuario>(this.apiUrl, usuario)
  }
  
  salvarToken(token: string) {
    localStorage.setItem('token', token);
  }

  salvarUsuario(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  
  obterUsuario() {
    const data = localStorage.getItem('usuario');
    return data ? JSON.parse(data) : null;
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }

  usuarioLogado(): boolean {
    return !!localStorage.getItem('token');
  }

}



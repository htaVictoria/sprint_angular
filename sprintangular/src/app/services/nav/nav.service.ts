import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavService {

  private estadoNav = new BehaviorSubject<boolean>(false);
  navAberto$ = this.estadoNav.asObservable();

  alternarNav() {
    this.estadoNav.next(!this.estadoNav.value);
  }

  abrirNav() {
    this.estadoNav.next(true);
  }

  fecharNav() {
    this.estadoNav.next(false);
  }

  constructor() { }
}

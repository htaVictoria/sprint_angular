import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../../services/veiculos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../shared/header/header.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, HeaderComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  veiculos: any[] = [];
  selectedModel: any = null;

  pesquisaModelo = '';
  pesquisaCodigo = '';

  filtroModelo: any[] = [];
  dadosCodigo: any = null;
  
  constructor(private veiculosService: VeiculosService) {}

  ngOnInit(): void {
    this.veiculosService.getVehicles().subscribe(res => {
      this.veiculos = res.vehicles; 
    });
  }

  filterModels() {
    this.filtroModelo = this.veiculos.filter(v =>
      v.vehicle.toLowerCase().includes(this.pesquisaModelo.toLowerCase())
    );
  }

  selectModel(modelo: any) {
    this.selectedModel = modelo;
    this.pesquisaModelo = modelo.vehicle;
    this.filtroModelo = [];
  }

  filterCodes() {
    const vin = this.pesquisaCodigo.trim().toUpperCase();

    const vinValido = vin.length === 20;
  
    if (!vin) {
      this.dadosCodigo = null;
      return;
    }
  
    if (!vinValido) {
      this.dadosCodigo = null;
      return;
    }
  
    this.veiculosService.getVehicleData(vin)
      .subscribe({
        next: (data) => {
          this.dadosCodigo = data;
        },
        error: (err) => {
          this.dadosCodigo = null;
        }
      });
}
}

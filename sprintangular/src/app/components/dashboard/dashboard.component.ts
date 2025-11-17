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
      this.veiculos = res.vehicles; // << IMPORTANTE!
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
    if (this.pesquisaCodigo.length === 17) {
      this.veiculosService.getVehicleData(this.pesquisaCodigo)
        .subscribe(
          data => this.dadosCodigo = data,
          _err => this.dadosCodigo = null
        );
    }
  }
}

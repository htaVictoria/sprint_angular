import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getVehicles() {
    return this.http.get<any>(`${this.baseUrl}/vehicles`);
  }

  getVehicleData(vin: string) {
    return this.http.post<any>(`${this.baseUrl}/vehicleData`, { vin });
  }
  
}

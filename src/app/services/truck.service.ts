// truck.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Truck} from "../interfaces/truck";

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  private baseUrl = '/api/trucks'; // Zmodyfikuj URL na odpowiedni do twojego backendu

  constructor(private http: HttpClient) { }

  getAllTrucks(): Observable<Truck[]> {
    return this.http.get<Truck[]>(this.baseUrl);
  }

  getTruckById(id: string | null): Observable<Truck> {
    return this.http.get<Truck>(`${this.baseUrl}/${id}`);
  }

  getTrucksByEmployeeId(employeeId: number): Observable<Truck[]> {
    return this.http.get<Truck[]>(`${this.baseUrl}/employee/${employeeId}`);
  }

  createTruck(truck: Truck): Observable<Truck> {
    return this.http.post<Truck>(this.baseUrl, truck);
  }

  updateTruck(id: number, truck: Truck): Observable<Truck> {
    return this.http.put<Truck>(`${this.baseUrl}/${id}`, truck);
  }

  deleteTruck(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VisitService } from "../interfaces/visit-service";
import {Trailer} from "../interfaces/trailer";
import {Truck} from "../interfaces/truck";

@Injectable({
  providedIn: 'root'
})
export class VisitServiceService {
  private baseUrl = '/api/visit-services';

  constructor(private http: HttpClient) { }

  getVisitServicesByTruckId(truckId: string | null): Observable<VisitService[]> {
    const id = truckId ? encodeURIComponent(truckId.toString()) : '';

    return this.http.get<VisitService[]>(`${this.baseUrl}/truck/${id}`);
  }

  getVisitServicesByTrailerId(trailerId: string | null): Observable<VisitService[]> {
    const id = trailerId ? encodeURIComponent(trailerId.toString()) : '';

    return this.http.get<VisitService[]>(`${this.baseUrl}/trailer/${id}`);
  }

  createVisitService(visitService: {
    trailer: Trailer | null;
    endDate: string;
    truck: Truck | null;
    description: string;
    startDate: string
  }): Observable<VisitService> {
    return this.http.post<VisitService>(this.baseUrl, visitService);
  }

  updateVisitService(id: number, visitService: VisitService): Observable<VisitService> {
    return this.http.put<VisitService>(`${this.baseUrl}/${id}`, visitService);
  }

  deleteVisitService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
